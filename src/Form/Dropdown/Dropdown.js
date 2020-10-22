import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import DropdownControl from './DropdownControl';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import "./dropdown.sass"
import PropTypes from "prop-types"

function Dropdown(props){
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState([])
  const [over, setOver] = useState(false)
  const control = useRef();
  const menu = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", toggle, false);
    return () => {
      document.removeEventListener("mousedown", toggle);
    };
  }, []);

  useLayoutEffect(() => {
    control.current.scrollWidth > control.current.clientWidth ? setOver(true) : setOver(false)
  }, [value])

  const toggle = (e) => {
    if (!control.current.contains(e.target) && !menu.current.contains(e.target)){
      setOpen(false)
    }
  }

  return(
    <div className="dropdown">
      <p className="dropdown-label">{props.label}</p>
      <DropdownControl 
        ref={control} 
        callback={() => setOpen(!open)} 
        multiple={props.multiple} 
        open={open} 
        value={value} 
        over={over}
        placeholder={props.placeholder}
      />
      <DropdownMenu ref={menu} open={open}>
        {props.options.map(option => {
          return (
            <DropdownItem 
              selected={value.some(selection => selection.value === option.value)}
              key={option.value}
              label={option.label}
              callback={() => {
                setValue(props.multiple ? 
                  value.every(selection => selection.value !== option.value) ?
                    [...value, {label: option.label, value: option.value}]
                    : [...value.filter(selection => selection.value !== option.value)]
                  : [{label: option.label, value: option.value}]
                )
                setOpen(props.multiple ? true : false)
                setOver(false)
              }}
            />
          )
        })}
      </DropdownMenu>
    </div>

  )
}

Dropdown.displayName = "Dropdown";

Dropdown.propTypes = {
  label: PropTypes.string,
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
}

export default Dropdown