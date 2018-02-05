import React from 'react'

const Kurssi = ({ kurssi }) => {
  return(
  <div>
    <Otsikko kurssi={kurssi}/>
    <Sisalto kurssi={kurssi} />
    <Yhteensa kurssi={kurssi} />
  </div>
  )  
}
const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = (props) => {
  return(
    <div>
      {props.kurssi.osat.map((osa) => <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />)}
    </div>
  )
}
const Yhteensa = (props) => { 
  return(
    <p>yhteensä {props.kurssi.osat.map(osa => osa.tehtavia).reduce((acculemator, current) => acculemator + current)} tehtävää</p>
  )
}

export default Kurssi