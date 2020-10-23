import React from 'react';
import "./button.sass";
import PropTypes from "prop-types"

function Button({onClick, label}){
  return(
    <div className="button" onClick={onClick}>
      <p>{label}</p>
    </div>
  )
}

Button.displayName = "Button";

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button