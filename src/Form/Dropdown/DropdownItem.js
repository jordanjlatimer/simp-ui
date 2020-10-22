import React from 'react'
import PropTypes from "prop-types"

function DropdownItem(props){
  return(
    <div 
      className={"dropdown-item" + (props.selected ? " selected" : "")}
      onClick={props.callback}
      key={props.value} 
    >
      {props.label}
    </div>
  )
}

DropdownItem.displayName = "DropdownItem"

DropdownItem.propTypes = {
  selected: PropTypes.bool,
  callback: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
}

export default DropdownItem