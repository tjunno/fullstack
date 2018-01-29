import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        vasen: 0,
        oikea: 0,
        kaikki: []
      }
    }
  
    klikVasen = () => {
      this.setState({
        vasen: this.state.vasen + 1,
        kaikki: this.state.kaikki.concat('v')
      })
    }
  
    klikOikea = () => {
      this.setState({
        oikea: this.state.oikea + 1,
        kaikki: this.state.kaikki.concat('o')
      })
    }
  
    render() {
        const historia = () => this.state.kaikki.join(' ')
        return (
          <div>
            <div>
              {this.state.vasen}
              <button onClick={this.klikVasen}>vasen</button>
              <button onClick={this.klikOikea}>oikea</button>
              {this.state.oikea}
              <div>{historia()}</div>
            </div>
          </div>
        )
      }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
