import React from "react"
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa"

export default function DatepickerNavButton(props){
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