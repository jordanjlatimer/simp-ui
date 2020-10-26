import React from "react";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa";
import "./drawer.sass";
import PropTypes from "prop-types";

function Drawer(props) {
  return (
    <div
      className={
        "drawer" +
        (props.open ? " open" : "") +
        (props.top
          ? " top"
          : props.bottom
          ? " bottom"
          : props.right
          ? " right"
          : " left")
      }
    >
      <div
        className={
          "drawer-close" +
          (props.open ? " open" : "") +
          (props.top
            ? " top"
            : props.bottom
            ? " bottom"
            : props.right
            ? " right"
            : " left")
        }
        onClick={props.callback}
      >
        {props.top ? (
          <FaAngleUp />
        ) : props.right ? (
          <FaAngleRight />
        ) : props.bottom ? (
          <FaAngleDown />
        ) : (
          <FaAngleLeft />
        )}
      </div>
      {props.children}
    </div>
  );
}

Drawer.displayName = "Drawer";

Drawer.propTypes = {
  open: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  right: PropTypes.bool,
  callback: PropTypes.func,
  children: PropTypes.node,
};

export default Drawer;
