import React, { Component } from 'react'

class Forecast extends Component {
  constructor(props) {
    super(props)
    }

  render() {
    const visible = this.props.visible
    let showForecast;

    if(visible) {
      showForecast = ''
    } else {
      showForecast = 'forecast--hide'
    }

    const forecast = this.props.forecast
    
    const day = this.props.forecastWeek.map((d, index) => {
      return(
        <div key={index} className='weather'>
          <div className='weather__day'>{d.day}</div>
          <div className='weather__condition'>
            <span className='weather__condition__min-max'>{d.high}º</span>
            <span className='weather__condition__min-max'>{d.low}º</span>
          </div>
        </div>
      )
    })

    return(
        <div className={`forecast ${showForecast}`} ref='forecast'>
            <header className='forecast__header'>
              <h4 className='forecast__header__city'>{`${forecast.city}, ${forecast.region} - ${forecast.country}`}</h4>
              <button className='forecast__header__btn' onClick= { this.props.setVisible.bind(this) }></button>
            </header>

            <main className='main'>
              <div className='temperature'>
                <span className='temperature__min'>{forecast.temp}º{forecast.tempUnit}</span>
                <span className='temperature__condition'>{forecast.code}</span>
              </div>

              <div className='info'>
                <div className='info__condition'>
                  <div className='info__condition__min-max'>
                    <img src="/assets/icon/arrow-up.svg" alt="arrow up"/>
                    <span>{`${forecast.high}º${forecast.tempUnit}`}</span>
                  </div>

                  <div className='info__condition__min-max'>
                    <img src="/assets/icon/arrow-down.svg" alt="arrow down"/>
                    <span>{`${forecast.low}º${forecast.tempUnit}`}</span>
                  </div>
                </div>

                <div className='info__condition'>
                  <span className='info__condition__name'>Pôr o Sol</span>
                  <span className='info__condition__number'>{forecast.sunset}</span>
                </div>
              </div>

              <div className='info'>
                <div className='info__condition'>
                  <span className='info__condition__name'>Vento</span>
                  <span className='info__condition__number'>{`${forecast.speed}${forecast.speedUnit}`}</span>
                </div>

                <div className='info__condition'>
                  <span className='info__condition__name'>Humidade</span>
                  <span className='info__condition__number'>{`${forecast.humidity}%`}</span>
                </div>
              </div>
            </main>

            <footer className='footer'>
              { day }
            </footer>
          </div>
    )
  }
}

export default Forecast