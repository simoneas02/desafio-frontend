import React from 'react';
import Header from './Header';
import Search from './Search';
import Capitals from './Capitals';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    let containerStateClass;

    if(this.props.state.visible) {
      containerStateClass = 'container--title--forecast';
    } else {
      containerStateClass = '';
    };

    return (
      <div className = {`container ${containerStateClass}`}>

        <Header state = {this.props.state} />

        <main div className = 'main'>
          <Search state = {this.props.state} store = {this.props.store}/>

          <Capitals />
        </main>

        <Footer />

      </div>
    );
  }
}

export default App