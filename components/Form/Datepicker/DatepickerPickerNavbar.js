import React from 'react'
import DatepickerNavButton from './DatepickerNavButton';

export default function DatepickerSelectionNavigation(props){
  return(
    <div className="datepicker-picker-navbar">
      <DatepickerNavButton interval="year" direction="back" onClick={props.functions.yearBack}/>
      <DatepickerNavButton interval="month" direction="back" onClick={props.functions.monthBack}/>
      <div>
        {
          props.day === null ? 
            new Date(props.year, props.month).toLocaleString('default', {month: 'long', year: 'numeric'})
            : new Date(props.year, props.month, props.day).toLocaleString('default', {month: 'long', year: 'numeric', day: 'numeric'})
        }
      </div>
      <DatepickerNavButton interval="month" direction="forward" onClick={props.functions.monthForward}/>
      <DatepickerNavButton interval="year" direction="forward" onClick={props.functions.yearForward}/>
    </div>
  )
}