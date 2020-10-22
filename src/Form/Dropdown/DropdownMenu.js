import React from 'react'
import PropTypes from "prop-types"

const DropdownMenu = React.forwardRef((props, ref) => {
  return(
    <div ref={ref} className={"dropdown-menu" + (props.open ? " open" : "")}>
      {props.children}
    </div>
  )
})

DropdownMenu.displayName = "DropdownMenu"

DropdownMenu.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node
}

export default DropdownMenu