import React from 'react'

export default function DatepickerControl(props){
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