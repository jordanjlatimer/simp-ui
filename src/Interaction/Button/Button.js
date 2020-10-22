import React from 'react';
import "./button.sass";
import PropTypes from "prop-types"

function Button(props){
  return(
    <div className="button" onClick={props.onClick}>
      <p>{props.label}</p>
    </div>
  )
}

Button.displayName = "Button";

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button