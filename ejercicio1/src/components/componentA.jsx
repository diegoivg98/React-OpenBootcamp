import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import ComponentB from "./componentB";

/**
 * It returns a component with the contact information.
 * @returns A component that renders a div with a h2, h3, h3, and a ComponentB.
 */
function componenteA({ contact }) {
    return (
      <div>
        <h2>Nombre: {contact.nombre}</h2>
        <h3>Apellidos: {contact.apellido}</h3>
        <h3>Email: {contact.email}</h3>
        <ComponentB estado={true} />
      </div>
    );
  }
  
 /* A validation of the props that the component receives. */
  componenteA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
  };
  
  export default componenteA;
