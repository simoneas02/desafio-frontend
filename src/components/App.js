import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import Capitals from './Capitals'
import Forecast from './Forecast'
import { translateWeek, translateConditions } from './utils'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      capitals: [],
      forecast: [],
      forecastWeek: [],
      visible: false
    }
  }

  componentDidMount() {
    this.listData()
  }

  listData() {
    const url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20u%3D'c'%20%20and%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%20in%20('Rio%20de%20Janeiro%2C%20rj'%2C%20'S%C3%A3o%20Paulo%2C%20sp'%2C%20'Belo%20Horizonte%2C%20mg'%2C%20'Bras%C3%ADlia%2C%20df'%2C%20'Bel%C3%A9m%2C%20pa'%2C%20'Salvador%2C%20ba'%2C%20'Curitiba%2C%20pr'%2C%20'Fortaleza%2C%20ce'%2C%20'Manaus%2C%20am'%2C%20'Jo%C3%A3o%20Pessoa%2C%20pb'))&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

    ajax().get(url)
      .then((response) => {
        const query = response.query.results.channel

        const capitals = query.map((q) => {
          return({
            capital: q.location.city,
            min: q.item.forecast[0].low,
            max: q.item.forecast[0].high
          })
        })

        this.setState({ capitals: capitals })
      })
  }

  searchForecast() {
    let city = this.refs.text.value
    const url = `http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u="c" and woeid in (select woeid from geo.places(1) where text="${city}")&format=json`

    if(this.refs.text.value) {
      this.refs.erroAPI.classList.add('search__erro--hide')
      this.refs.erro.classList.add('search__erro--hide')

      ajax().get(url)
        .then((response) => {

          if(response.query.results) {
            const query = response.query.results.channel
            const week = response.query.results.channel.item.forecast

            const forecast = {
                city: query.location.city,
                region: query.location.region,
                country: query.location.country,
                temp: query.item.condition.temp,
                tempUnit: query.units.temperature,
                code: translateConditions(query.item.condition.code),
                text: query.item.condition.text,
                high: query.item.forecast[0].high,
                low: query.item.forecast[0].low,
                sunset: query.astronomy.sunset,
                speed: query.wind.speed,
                speedUnit: query.units.speed,
                humidity: query.atmosphere.humidity
                }

            const forecastWeek = week.filter((d, i) => (i >= 1 && i <= 5)).map((d) => {

              return({
                day: translateWeek(d.day),
                low: d.low,
                high: d.high
              })

            })

            this.setState({ visible: true })
            this.setState({ forecast: forecast })
            this.setState({ forecastWeek: forecastWeek })
            
            this.refs.text.value = ''

          } else {
            this.refs.erroAPI.classList.remove('search__erro--hide')
            this.refs.erro.classList.add('search__erro--hide')
            this.refs.text.value = ''
          }

        })
        .catch(function (response) {
          this.refs.erroResp.classList.remove('search__erro--hide')
        })
    } else {
      this.refs.erro.classList.remove('search__erro--hide')
      this.refs.erroAPI.classList.add('search__erro--hide')
      this.refs.text.value = ''
    }

  }

  makeInvisible() {
    this.setState({ visible: false })
  }

  render() {

    const visible = this.state.visible
    let headerStateClass;
    let containerStateClass;

    if(visible) {
      headerStateClass = 'header__title--forecast'
      containerStateClass = 'container--title--forecast'
    } else {
      headerStateClass = ''
      containerStateClass = ''
    }

    return (
      <div className={`container ${containerStateClass}`}>
        
        <header className='header'>
          <h1 className={`header__title ${headerStateClass}`}>Previsão do Tempo</h1>

          <Forecast ref='show' forecast= { this.state.forecast }
                    forecastWeek= { this.state.forecastWeek }
                    visible= { this.state.visible }
                    setVisible = {this.makeInvisible.bind(this)} />

          <div className="search">
            <input className='search__input' ref='text' type='search' placeholder='Insira aqui o nome da cidade' />
            <button className="search__button" ref='btnSearch' onClick= { this.searchForecast.bind(this) }></button>
          </div>
          <span className="search__erro--hide search__erro" ref="erro">* O campo não pode ser vazio</span>
          <span className="search__erro--hide search__erro" ref="erroAPI">* Informe um país ou cidade válido</span>
          <span className="search__erro--hide search__erro" ref="erroResp">* A API não está respondendo corretamente</span>
        </header>

        <Capitals capitals= { this.state.capitals }/>

      </div>
    );
  }
}

export default App;
