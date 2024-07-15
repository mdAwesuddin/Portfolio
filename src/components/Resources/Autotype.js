import React from 'react'
import Typewriter from "typewriter-effect";

const Autotype = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Hello",
              "Namaste",
              "Asalamulaikum",
              "Kasakai",
              "Bonjour",
              "Hola",
              "Ciao",
              "Hallo"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      );
}

export default Autotype