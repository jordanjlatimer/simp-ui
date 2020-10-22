import React from "react"
import PropTypes from "prop-types"

function DropdownValue(props){
  return(
    <div className={"dropdown-value" + (props.multiple ? "-multiple" : "")}>
      <p>{props.value}</p>
    </div>
  )
}

DropdownValue.displayName = "DropdownValue"

DropdownValue.propTypes = {
  multiple: PropTypes.bool,
  value: PropTypes.string
}

export default DropdownValue