import * as React from "react"

type DropdownIconProps = {
  className?: string
}

const DropdownIcon: React.FC<DropdownIconProps> = ({
  className = ""
}) => {
  return(
    <svg viewBox="0 0 100 85" className={className}>
      <path id="svg_1" d="m20.06437,14.85586l30.12499,50.11599l30.12499,-50.11599l-60.24999,0z" strokeWidth="12"/>
    </svg>
  )
}

export { DropdownIcon }