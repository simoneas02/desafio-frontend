import React, {Component} from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let headerStateClass

    if(this.props.state.visible) {
      headerStateClass = 'header__title--forecast'
    } else {
      headerStateClass = ''
    }

    return (

      <header className = 'header'>
        <h1 className={`header__title ${headerStateClass}`}>Previsão do Tempo</h1>
      </header>
    
  )
  
  }

}

export default Header;
