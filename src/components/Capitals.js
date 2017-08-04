import React, { Component } from 'react'

class Capitals extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const props = this.props.capitals
    
    if(props.length === 0) {
      return <span>Loading...</span>
    }

    const listCapital = props.map((city, index) => {
      return(
        <div key={index} className='section__content__details'>
          <span className='section__content__details__weather'>{city.min}º</span>
          <span className='section__content__details__weather'>{city.max}º</span>
          <span className='section__content__details__where'>{city.capital}</span>
        </div>
      )
    })

      return(
        <section className='section'>
          <h2 className='section__title'>Capitais</h2>
          <div className='section__temp'>
            <div className='section__temp__title'>
              <span className='section__temp__min-max'>Min</span><span className='section__temp__min-max'>Máx</span>
            </div>

            <div className='section__temp__title section__temp__title--hide'>
              <span className='section__temp__min-max'>Min</span><span className='section__temp__min-max'>Máx</span>
            </div>
          </div>

          <div className='section__content'>
            { listCapital }
          </div>
        </section>
        
        
      )
    } 
  
}

export default Capitals