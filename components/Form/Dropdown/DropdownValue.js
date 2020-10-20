import React from "react"

export default function DropdownValue(props){
  return(
    <div className={"dropdown-value" + (props.multiple ? "-multiple" : "")}>
      <p>{props.value}</p>
    </div>
  )
}