import React from "react"

export default function DatepickerPickerDay(props){
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