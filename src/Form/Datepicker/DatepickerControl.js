import React from 'react'
import PropTypes from "prop-types"

function DatepickerControl(props){
  return(
    <p 
      className={"datepicker-control" + (props.selected ? " selected" : "")}
      onClick={props.onClick}
      tabIndex="0"
    >
      {props.value}
    </p>
  )
}

DatepickerControl.displayName = "DatepickerControl"

DatepickerControl.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string
}

export default DatepickerControl