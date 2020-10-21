import React from 'react'

const DropdownMenu = React.forwardRef((props, ref) => {
  return(
    <div ref={ref} className={"dropdown-menu" + (props.open ? " open" : "")}>
      {props.children}
    </div>
  )
})

DropdownMenu.displayName = "DropdownMenu"

export default DropdownMenu