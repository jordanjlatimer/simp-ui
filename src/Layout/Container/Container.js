import React from "react";
import "./container.sass";
import PropTypes from "prop-types";

function Container(props) {
  return (
    <div
      className={
        "container" +
        (props.raised ? " raised" : "") +
        (props.bordered ? " bordered" : "") +
        (props.margined ? " margined" : "") +
        (props.clickable ? " clickable" : "") +
        (props.stretchX ? " stretch-x" : "")
      }
    >
      {props.header ? (
        <h1
          className={"container-header" + (props.inverted ? " inverted" : "")}
        >
          {props.header}
        </h1>
      ) : null}
      <div
        className={
          "container-contents" +
          (props.flex ? " flex" : "") +
          (props.column ? " column" : "") +
          (props.padded ? " padded" : "")
        }
      >
        {props.children}
      </div>
    </div>
  );
}

Container.displayName = "Container";

Container.propTypes = {
  raised: PropTypes.bool,
  bordered: PropTypes.bool,
  margined: PropTypes.bool,
  clickable: PropTypes.bool,
  stretchX: PropTypes.bool,
  flex: PropTypes.bool,
  padded: PropTypes.bool,
  children: PropTypes.node,
  column: PropTypes.bool,
  header: PropTypes.string,
  inverted: PropTypes.bool,
};

export default Container;
