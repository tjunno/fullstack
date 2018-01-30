import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({klik, nimi}) =>{
  return (
  <button onClick={klik}> {nimi} </button>
  )
}

const Statistics = ({hyva, neutraali, huono, keskiarvo, kaikki}) =>{
  const positiivisia = hyva / kaikki * 100 + '%'
  if (kaikki===0)
  return (<div><p>ei yhtään palautetta annettu</p></div>)
  else
  return (
    
    <table>
      <tbody>
    
    <Statistic nimi='hyvä' arvo={hyva}/>
    <Statistic nimi='neutraali' arvo={neutraali}/>
    <Statistic nimi='huono' arvo={huono}/>
    <Statistic nimi='keskiarvo' arvo={keskiarvo/kaikki}/>
    <Statistic nimi='positiivisia' arvo={positiivisia}/>
    </tbody>
    </table>
  )

}

const Statistic = ({nimi, arvo}) =>{
  return (
    <tr><td>{nimi}</td><td>{arvo}</td></tr>
  )
}
class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
        kaikki: 0,
        keskiarvo: 0
      }
    }

    klikkaa = (arvo) => {
      if (arvo==='hyva')
      return () => {
        this.setState({
          hyva: this.state.hyva + 1,
          keskiarvo: this.state.keskiarvo + 1,
          kaikki: this.state.kaikki + 1
        })
      }
      if (arvo==='neutraali')
      return () => {
        this.setState({
          neutraali: this.state.neutraali + 1,
          keskiarvo: this.state.keskiarvo + 0,
          kaikki: this.state.kaikki + 1
        })
      }
      if (arvo==='huono')
      return () => {
        this.setState({
          huono: this.state.huono + 1,
          keskiarvo: this.state.keskiarvo - 1,
          kaikki: this.state.kaikki + 1
        }) 
      }
      
    }
    render() {
        return (
          <div>
            <div>
              <h1>anna palautetta</h1>
              <Button klik={this.klikkaa('hyva')} nimi='hyvä'/>
              <Button klik={this.klikkaa('neutraali')} nimi='neutraali'/>
              <Button klik={this.klikkaa('huono')} nimi='huono'/>
              <h1>statistiikka</h1>             
              <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.huono} keskiarvo={this.state.keskiarvo} kaikki={this.state.kaikki} />              
            </div>
          </div>
        )
      }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
