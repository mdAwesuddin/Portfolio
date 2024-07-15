import React from 'react'
import Toast from "react-bootstrap/Toast";

const Toaster = (props) => {
  return (
    <Toast
        style={{
          position: "fixed",
          bottom: "25px",
          right: "20px",
          zIndex: 9999, 
        }}
        bg="Secondary"
        show={props.show}
        delay={3000}
        autohide
      >
        {/* <Toast.Header>
          <strong className="me-auto">Welcome</strong>
        </Toast.Header> */}
        <Toast.Body>{props.content}<strong className="purple"> {props.supercontent}</strong></Toast.Body>
      </Toast>
  )
}

export default Toaster