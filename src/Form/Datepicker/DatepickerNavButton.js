import React from "react"
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa"
import PropTypes from "prop-types"

function DatepickerNavButton(props){
  return(
    props.interval === "year" ?
      props.direction === "back" ?
        <FaAngleDoubleLeft onClick={props.onClick}/>
        : <FaAngleDoubleRight onClick={props.onClick}/>
      : props.direction === "back" ?
        <FaAngleLeft onClick={props.onClick}/>
        : <FaAngleRight onClick={props.onClick}/>
  )
}

DatepickerNavButton.displayName = "DatepickerNavButton"

DatepickerNavButton.propTypes = {
  interval: PropTypes.string,
  direction: PropTypes.string,
  onClick: PropTypes.func
}

export default DatepickerNavButton