import React, {useState, useEffect} from 'react';
import { FaRegWindowClose } from 'react-icons/fa';

export function Modal(props){
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(props.open)
  },[props.open])

  return(
    <div className={open ? "modal open" : "modal"}>
      <div className="modal-contents">
        <div 
          className="modal-close"
          onClick={() => {setOpen(false); props.callback()}}
        >
          <FaRegWindowClose/>
        </div>
        {props.children}
      </div>
    </div>
  )
}