import React, { useState, useEffect, useRef } from 'react';
import DatepickerControl from './DatepickerControl';
import DatepickerSelection from './DatepickerPicker';
import "./datepicker.sass"
import PropTypes from "prop-types"

function Datepicker(props){
  const [open, setOpen] = useState(false)
  const [day, setDay] = useState(null)
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const picker = useRef();

  const functions = {
    yearBack: () => {setDay(null); setYear(year - 1);},
    yearForward: () => {setDay(null); setYear(year - 1);},
    monthBack: () => month === 0 ? (setDay(null), setMonth(11), setYear(year - 1)) : (setDay(null), setMonth(month - 1)),
    monthForward: () => month === 11 ? (setDay(null), setMonth(0), setYear(year + 1)) : (setDay(null), setMonth(month + 1)),
    setDay: (value) => {setDay(value)} 
  }

  useEffect(() => {
    document.addEventListener("mousedown", toggle);
    return () => {
      document.removeEventListener("mousedown", toggle);
    };
  }, []);

  const toggle = (e) => {
    if (picker.current.contains(e.target) === false){
      setOpen(false)
    }
  }

  return(
    <div className="datepicker">
      <p className="datepicker-label">{props.label}</p>
      <div>
        <DatepickerControl 
          selected={day !== null} 
          onClick={() => setOpen(true)} 
          value={day === null ? props.placeholder : new Date(year, month, day).toLocaleString('default', {month: 'long', year: 'numeric', day: 'numeric'})}
        />
        <DatepickerSelection
          functions={functions}
          day={day}
          month={month}
          year={year}
          open={open}
          ref={picker}
        />
      </div>
    </div>
  )
}

Datepicker.displayName = "Datepicker"

Datepicker.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default Datepicker