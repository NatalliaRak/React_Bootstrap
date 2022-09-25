import React from "react";
import './scandinavian.css';

const array=['Denmark','Iceland', 'Finland', 'Sweden', 'Norway'];
const lang = ['Danmark', 'Island', 'Suomi', 'Sverige', 'Norge'];
const hot = ['Spain', 'Italy', 'UK', 'France', 'Germany', 'Poland', 'Greece'];
const style={
  fontSize: 35,
}   


function IsScandinavian(props) {
  if (props.Scandinavian===array[0] || props.Scandinavian===array[1] || props.Scandinavian===array[2] || props.Scandinavian===array[3] || props.Scandinavian===array[4]) {
    return <p  style={style}>{props.Scandinavian} is Scandinavian country</p>;
  };
  if (props.Scandinavian===lang[0] || props.Scandinavian===lang[1] || props.Scandinavian===lang[2] || props.Scandinavian===lang[3] || props.Scandinavian===lang[4]){
    return <p  style={style}>{props.Scandinavian} is Scandinavian country for sure!<br/> Nice that you already started to learn the language of {props.Scandinavian}</p>;
  };
  if (props.Scandinavian===hot[0] || props.Scandinavian===hot[1] || props.Scandinavian===hot[2] || props.Scandinavian===hot[3] || props.Scandinavian===hot[4] || props.Scandinavian===hot[5] || props.Scandinavian===hot[6]){
    return <p  style={style}>{props.Scandinavian} is NOT Scandinavian country, but <br/> but the country choice is good too</p>;
  };
  if (props.Scandinavian==='Russia'){
    return <p  style={style}>CHECK YOUR MAP</p>;
  };
  return <p  style={style}>Sorry, you are dreaming not about Scandinavian country</p>;
}


export default class Checking extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {country: ''};
  }

  handleChange(e) {
    this.setState({country: e.target.value});
  }

  render() { 
    const country = this.state.country;
    const capitalized =
   country.charAt(0).toUpperCase()
  + country.slice(1); 

    return (
    
      <fieldset>
        <h3>
          Check the country where you want to buy a cousy house</h3>
        <legend>Enter country:</legend>
        <br/>
        <br/>
        <input 
          type='text'
          value={capitalized}
          onChange={this.handleChange}
          />
          <br/>
          <br/>
        <IsScandinavian
          Scandinavian={capitalized} />
      </fieldset>
    );
  }
}