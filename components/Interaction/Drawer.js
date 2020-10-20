import React from 'react';
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa';

export function Drawer(props) {
  return(
    <div 
      className={"drawer" + 
        (props.open ? " open" : "") + 
        (props.top ? " top" 
          : props.bottom ? " bottom"
          : props.right ? " right"
          : " left")
      }
    >
      <div 
        className={"drawer-close" +
          (props.open ? " open" : "") +
          (props.top ? " top"
          : props.bottom ? " bottom"
          : props.right ? " right"
          : " left")
        } 
        onClick={props.callback}
      >
        {
          props.top ? <FaAngleUp/>
          : props.right ? <FaAngleRight/>
          : props.bottom ? <FaAngleDown/>
          : <FaAngleLeft/>
        }
      </div>
      {props.children}
    </div>
  )
}