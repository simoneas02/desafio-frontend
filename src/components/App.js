import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import Capitals from './Capitals'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      capitals: []
    }
  }

  componentDidMount() {
    this.listData()
  }

  listData() {
    const url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20u%3D'c'%20%20and%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%20in%20('Rio%20de%20Janeiro%2C%20rj'%2C%20'S%C3%A3o%20Paulo%2C%20sp'%2C%20'Belo%20Horizonte%2C%20mg'%2C%20'Bras%C3%ADlia%2C%20df'%2C%20'Bel%C3%A9m%2C%20pa'%2C%20'Salvador%2C%20ba'%2C%20'Curitiba%2C%20pr'%2C%20'Fortaleza%2C%20ce'%2C%20'Manaus%2C%20am'%2C%20'Jo%C3%A3o%20Pessoa%2C%20pb'))&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"

    ajax().get(url)
      .then((response) => {
        const query = response.query.results.channel;

        const c = query.map((q) => {
          return({
          capital: q.location.city,
          min: q.item.forecast[0].low,
          max: q.item.forecast[0].high
          })
        })

        this.setState({ capitals: c })
      })
  }

  render() {
  
    return (
      <div className='container'>
        
        <header className='header'>
          <h1 className='header__title'>Previsão do Tempo</h1>

          <div className='forecast'>
            <header className='forecast__header'>
              <h4 className='forecast__header__city'>Niterói, RJ - Brasil</h4>
              <button className='forecast__header__btn'></button>
            </header>

            <main className='main'>
              <h3 className='main__temperature'> 20ºC Nublado</h3>

              <div className='info'>
                <div className='info__condition'>
                  <div className='info__condition__min-max'>
                    <img src="/assets/icon/arrow-up.svg" alt="arrow up"/>
                    <span>16ºC</span>
                  </div>

                  <div className='info__condition__min-max'>
                    <img src="/assets/icon/arrow-down.svg" alt="arrow down"/>
                    <span>25ºC</span>
                  </div>
                </div>

                <div className='info__condition'>
                  <span className='info__condition__name'>Sensação</span>
                  <span className='info__condition__number'>19ºC</span>
                </div>
              </div>

              <div className='info'>
                <div className='info__condition'>
                  <span className='info__condition__name'>Vento</span>
                  <span className='info__condition__number'>18km/h</span>
                </div>

                <div className='info__condition'>
                  <span className='info__condition__name'>Humidade</span>
                  <span className='info__condition__number'>89%</span>
                </div>
              </div>
            </main>

            <footer className='footer'>
              <div className='weather'>
                <div className='weather__day'>Terça</div>
                <div className='weather__condition'>
                  <span className='weather__condition__min-max'>18º</span>
                  <span className='weather__condition__min-max'>26º</span>
                </div>
              </div>

              <div className='weather'>
                <div className='weather__day'>Terça</div>
                <div className='weather__condition'>
                  <span className='weather__condition__min-max'>18º</span>
                  <span className='weather__condition__min-max'>26º</span>
                </div>
              </div>

              <div className='weather'>
                <div className='weather__day'>Terça</div>
                <div className='weather__condition'>
                  <span className='weather__condition__min-max'>18º</span>
                  <span className='weather__condition__min-max'>26º</span>
                </div>
              </div>

              <div className='weather'>
                <div className='weather__day'>Terça</div>
                <div className='weather__condition'>
                  <span className='weather__condition__min-max'>18º</span>
                  <span className='weather__condition__min-max'>26º</span>
                </div>
              </div>

              <div className='weather'>
                <div className='weather__day'>Terça</div>
                <div className='weather__condition'>
                  <span className='weather__condition__min-max'>18º</span>
                  <span className='weather__condition__min-max'>26º</span>
                </div>
              </div>
            </footer>
          </div>

          <div className="search">
            <input className='search__input' type='search' placeholder='Insira aqui o nome da cidade' />
            <button className="search__button"> </button>
          </div>
        </header>

        <Capitals capitals= { this.state.capitals }/>
      </div>
    );
  }
}

export default App;
