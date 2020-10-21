import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';

export function Accordion(props){
  const [expanded, setExpanded] = useState([])

  return(
    <div className="accordion">
      <h3 className="accordion-label">{props.label}</h3>
      <div className="accordion-contents">
        {props.items.map((item, index) => {
          return <div className="accordian-item">
            <div 
              className={"accordion-item-label" + (index === 0 ? " first" : "") + (index === props.items.length - 1 ? " last" : "")}
              onClick={() => {
                props.multiple ? 
                  expanded.includes(index) ? 
                    setExpanded(expanded.filter(value => value !== index))
                    : setExpanded([...expanded, index])
                  : expanded.includes(index) ?
                    setExpanded([])
                    : setExpanded([index])
              }}
            >
              <FaAngleRight className={expanded.includes(index) ? "open" : ""}/>
              <h4>{item.label}</h4>
            </div>
            <div className={"accordion-item-box" + (expanded.includes(index) ? " open" : "")}>
              <p className="accordion-item-contents">{item.content}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
