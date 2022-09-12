import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * ComponentB is a function that takes a boolean value as an argument and returns a div that contains a
 * h5 element and a button element.
 * @returns A function that returns a component.
 */
function ComponentB(estado) {
  const [conectado, setConectado] = useState(estado);
  return (
    <div>
      <h5>
        {conectado === false ? "Contacto no disponible" : "Contacto en linea"}
      </h5>
      <button onClick={() => setConectado(!conectado)}>
        {conectado === false ? "Conectado" : "Desconectado"}
      </button>
    </div>
  );
}

/* A validation of the props that are being passed to the component. */
ComponentB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponentB;
