import React, { forwardRef } from "react"
import DropdownValue from "./DropdownValue"
import { FaAngleDown } from 'react-icons/fa';
import PropTypes from "prop-types"

const DropdownControl = forwardRef((props, ref) => {
  return(
    <div
      ref={ref}
      className={"dropdown-control" + (props.open ? " open" : "") + (props.multiple && props.value.length > 0 ? " multiple" : "")}
      onClick={props.callback}
      tabIndex="0"
    >
      {props.multiple ? 
        props.value.length > 0 ?
          props.over ? 
            <DropdownValue multiple value={props.value.length + " Items Selected"}/>
            : props.value.map(selection => {
                return (
                  <DropdownValue multiple key={selection.value} value={selection.label}/>
                )
              })
          : <DropdownValue value={props.placeholder}/>
        : <DropdownValue value={props.value[0] ? props.value[0].label : props.placeholder}/>
      }
      <div className={"dropdown-icon" + (props.open ? " open" : "")}>
        <FaAngleDown/>
      </div>
    </div>
  )
})

DropdownControl.displayName = "DropdownControl"

DropdownControl.propTypes = {
  open: PropTypes.bool,
  value: PropTypes.string,
  callback: PropTypes.func,
  multiple: PropTypes.bool,
  over: PropTypes.bool,
  placeholder: PropTypes.string
}

export default DropdownControl