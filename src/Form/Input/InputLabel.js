import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import PropTypes from "prop-types"

function InputLabel(props){
  return(
    <div className="input-label">
      <p className="input-label-text">{props.label}</p>
      <FaExclamationCircle className={"input-label-icon" + (props.active ? " active" : "")}/>
    </div>
  )
}

InputLabel.displayName = "InputLabel"

InputLabel.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool
}

export default InputLabel