import React from "react"
import PropTypes from "prop-types"

function DatepickerPickerDay(props){
  return(
    props.onClick ?
      <div 
        onClick={props.onClick}
        className={"datepicker-picker-days-day" + (props.active ? " active" : "")}
      >
        {props.value}
      </div>
      : <div className="datepicker-picker-days-day"/>
  )
}

DatepickerPickerDay.displayName = "DatepickerPickerDay"

DatepickerPickerDay.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default DatepickerPickerDay