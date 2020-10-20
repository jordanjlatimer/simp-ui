import React, { forwardRef } from 'react';

const InputControl = forwardRef((props, ref) => {
  return(
    <input
      className={"input-control" + (props.invalid ? " invalid" : "")}
      onBlur={props.onBlur}
      value={props.value}
      onFocus={props.onFocus}
      type={props.password ? "password" : "text"}
      placeholder={props.placeholder}
      ref={ref}
      onChange={(e) => props.onChange(e)}
    />
  )
})

InputControl.displayName = "InputControl"

export default InputControl