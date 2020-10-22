import React, { useLayoutEffect, useRef, useState } from 'react';
import InputControl from './InputControl';
import InputLabel from './InputLabel';
import "./input.sass"
import PropTypes from "prop-types"

function Input(props){
  const [value, setValue] = useState(props.initialValue ? props.initialValue : "")
  const [invalid, setInvalid] = useState(false)
  const [invMessage, setInvMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [blurred, setBlurred] = useState(false)
  const prefix = useRef()
  const suffix = useRef()
  const control = useRef()

  const blurFunc = () => {setShowMessage(false); setBlurred(true);}
  const focusFunc = () => {setShowMessage(true); setClicked(true);}

  useLayoutEffect(() => {
    control.current.style.paddingLeft = prefix.current.clientWidth + "px"
    control.current.style.paddingRight = suffix.current.clientWidth + "px"
  }, [])

  const changeFunc = e => {
    if (props.changeValidation){
      if (e.target.value.split("").every(props.changeValidation)){
        setValue(e.target.value)
        if(props.onChange){
          props.onChange(e.target.value)
        }
      }
    }
    else{
      setValue(e.target.value)
      if (props.onChange){
        props.onChange(e.target.value)
      }
    }
    if (props.valueValidation){
      let validation = props.valueValidation(e.target.value)
      if (validation.invalid){
        setInvalid(true)
        setInvMessage(validation.message)
      }
      else{
        setInvalid(false)
      }
    }
  }

  return(
    <div className="input">
      <InputLabel label={props.label} active={invalid && clicked && blurred}/>
      <div className="input-container">
        <InputControl 
          invalid={invalid && showMessage && clicked && blurred}
          value={props.valueDisplay ? props.valueDisplay(value) : value}
          onBlur={blurFunc}
          onFocus={focusFunc}
          password={props.password}
          placeholder={props.placeholder}
          ref={control}
          changeValidation={props.changeValidation}
          valueValidation={props.valueValidation}
          onChange={changeFunc}
        />
        <div className="input-prefix" ref={prefix}>{props.prefix}</div>
        <div className="input-suffix" ref={suffix}>{props.suffix}</div>
        <div className={"input-label-invalid" + (showMessage && invalid && clicked && blurred ? " active" : "")}>
          {invMessage}
        </div>
      </div>
    </div>

  )
}

Input.displayName = "Input";

Input.propTypes = {
  initialValue: PropTypes.string,
  changeValidation: PropTypes.func,
  onChange: PropTypes.func,
  valueValidation: PropTypes.func,
  label: PropTypes.string,
  valueDisplay: PropTypes.func,
  password: PropTypes.bool,
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string
}

export default Input