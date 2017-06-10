import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert(`SHAME ON YOU ${this.props.name.toUpperCase()}!!!!!`);
  }

  handleMouseOver() {
    console.warn(`Don't you do it ${this.props.name}....!`)
  }

  render() {
    return (
      <div>
        <button 
          onClick={this.handleClick} 
          onMouseOver={this.handleMouseOver}
          className="button"
        />
        <h3 onMouseOver={this.handleMouseOver}>
          THIS IS NOT A DRILL, DO NOT CLICK ON THE BUTTON! 
        </h3>
      </div>
    )
  }
}

export default Button;
