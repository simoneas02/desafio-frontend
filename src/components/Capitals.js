import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'

class Capitals extends Component {

  constructor(props) {
    super(props)

    this.state = {
      capitalList: []
    }
  }

  componentDidMount() {
    this.listCapital()
  }

  listCapital() {
    const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20u%3D"c"%20%20and%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%20in%20("Rio%20de%20Janeiro%2C%20rj"%2C%20"S%C3%A3o%20Paulo%2C%20sp"%2C%20"Belo%20Horizonte%2C%20mg"%2C%20"Bras%C3%ADlia%2C%20df"%2C%20"Bel%C3%A9m%2C%20pa"%2C%20"Salvador%2C%20ba"%2C%20"Curitiba%2C%20pr"%2C%20"Fortaleza%2C%20ce"%2C%20"Manaus%2C%20am"%2C%20"Jo%C3%A3o%20Pessoa%2C%20pb"))&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

    ajax().get(url).then((response) => {
      const query = response.query.results.channel

      const capitalList = query.map((capital) => {
        return({
          capital: capital.location.city,
          min: capital.item.forecast[0].low,
          max: capital.item.forecast[0].high
        })
      })

      this.setState({ capitalList: capitalList })
    })

  }

  render() {

    const capitalList = this.state.capitalList
    const isLoading = capitalList.length === 0

    if(isLoading) {
      return <img src='/assets/icon/loading.svg'/>
    }

    const capitalData = capitalList.map((capital, index) => {
      return (
        <div key = {index} className='section__content__details'>
          <span className = 'section__content__details__weather'>{capital.min}º</span>
          <span className = 'section__content__details__weather'>{capital.max}º</span>
          <span className = 'section__content__details__where'>{capital.capital}</span>
        </div>
      )
    })

    return (
      <section className = 'section'>

        <h2 className = 'section__title'>Capitais</h2>

        <div className = 'section__temp'>

          <div className = 'section__temp__title'>
            <span className = 'section__temp__min-max'>Min</span>
            <span className = 'section__temp__min-max'>Máx</span>
          </div>

          <div className = 'section__temp__title'>
            <span className = 'section__temp__min-max'>Min</span>
            <span className = 'section__temp__min-max'>Máx</span>
          </div>

        </div>

        <div className = 'section__content'>
          {capitalData}
        </div>

      </section>
    )

  }

}

export default Capitals