import React from "react";
import Text from "./text/text";
import Grid6Img from './grid6.jpg';
import './grid.css';

function TextBanner(props) {
    const style={
        height: '100%',
        width: '100%'

    }
    if (!props.text) {
      return (
      <img clasName='imgHover' src={Grid6Img} style={style} alt='' /> )
    }
  
    return (
      <div className="Text">
        <Text />
      </div>
    );
  }
  
  export default  class Grid6 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showText: false,
        showImg: false
      }
      this.handleToggleMove = this.handleToggleMove.bind(this);
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleMove() {
      this.setState(prevState => ({
        showText: !prevState.showText
      }));
    }

    handleToggleClick() {
      this.setState(prevState => ({
        showImg: !prevState.showText
      }));
    }

    
    render() {
      return (
        <div style={{textAlign: 'center'}}  onClick={this.handleToggleMove}>
          <TextBanner text={this.state.showText} />
        </div>
      );
    }
  }