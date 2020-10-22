import React, { forwardRef } from 'react'
import DatepickerPickerDay from './DatepickerPickerDay';
import DatepickerPickerNavbar from './DatepickerPickerNavbar'
import PropTypes from "prop-types"

const DatepickerPicker = forwardRef((props, ref) => {
  
  const generateTable = () => {
    let monthDays = new Date(props.year, props.month + 1, 0).getDate();
    let returnArray = [];
    for (let i = 0; i <= monthDays; i++){
      if (i === 0){
        let weekDays = new Date(props.year, props.month, i).getDay();
        if (weekDays !== 6){
          for (let j = 0; j <= weekDays; j++){
            returnArray.push(<DatepickerPickerDay key={j}/>)
          }
        }
      }
      else{
        returnArray.push(
          <DatepickerPickerDay key={i} onClick={() => props.functions.setDay(i)} active={props.day === i} value={i}/>
        )
      }
    }
    return returnArray;
  }

  return(
    <div ref={ref} className={"datepicker-picker" + (props.open ? " open" : "")}>
      <DatepickerPickerNavbar functions={props.functions} day={props.day} month={props.month} year={props.year}/>
      <div className="datepicker-picker-days">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(label => <div key={label} className="datepicker-picker-days-header">{label}</div>)}
        {generateTable()}
      </div>
    </div>
  )
})

DatepickerPicker.displayName = "DatepickerPicker"

DatepickerPicker.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  day: PropTypes.number,
  functions: PropTypes.objectOf(PropTypes.func),
  open: PropTypes.bool
}

export default DatepickerPicker