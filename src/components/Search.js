import React from 'react'
import ajax from '@fdaciuk/ajax'
import ForecastCard from './ForecastCard'
import {translateWeek} from '../utils/translateWeek'
import {translateConditions} from '../utils/translateConditions'
import {changeVisble} from '../actions'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      forecast: [],
      forecastWeek: []
    }

  }

  searchForecast() {
    const city = this.refs.text.value
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

            const forecastWeek = week
              .filter((d, i) => (i >= 1 && i <= 5))
              .map((d) => {

                return({
                  day: translateWeek(d.day),
                  low: d.low,
                  high: d.high
                })

              })

            changeVisble(true)
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

  render() {

    return (
      <div>

        <ForecastCard forecast = { this.state.forecast }
                      forecastWeek= { this.state.forecastWeek }
                      state = {this.props.state}
                       />

        <div className="search">
            <input className='search__input' ref='text' type='search' placeholder='Insira aqui o nome da cidade' />
            <button className="search__button" ref='btnSearch' onClick= { this.searchForecast.bind(this) }></button>
        </div>
        <span className="search__erro--hide search__erro" ref="erro">* O campo não pode ser vazio</span>
        <span className="search__erro--hide search__erro" ref="erroAPI">* Informe um país ou cidade válido</span>
        <span className="search__erro--hide search__erro" ref="erroResp">* A API não está respondendo corretamente</span>

      </div>
    )
  }
}

export default Search