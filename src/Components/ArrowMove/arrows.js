import React from 'react';
import "./arrow.css";
import ArrowKeysReact from 'arrow-keys-react';

ArrowKeysReact.config({
  left: () => {
    console.log('left key detected.');
  },
  right: () => {
    console.log('right key detected.');
  },
  up: () => {
    console.log('up key detected.');
  },
  down: () => {
    console.log('down key detected.');
  }
});

const Arrow = props => {
  return (
    <div className="row">
      <div className="col-sm4">
        <div className="row1">
        </div>
          <h3>{props.porto}</h3>
        <div className="row2">
        <h3>{props.link}</h3>
        </div>
        <div className="row3">
        <h3>{props.about}</h3>
        </div>
        <div className="row3">
        <h3>{props.contact}</h3>
        </div>
      </div>
    </div>
  );
}

export default Arrow;


