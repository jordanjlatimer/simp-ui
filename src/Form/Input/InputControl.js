import React, { forwardRef } from 'react';
import PropTypes from "prop-types"

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

InputControl.propTypes = {
  invalid: PropTypes.bool,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  password: PropTypes.bool
}

export default InputControl