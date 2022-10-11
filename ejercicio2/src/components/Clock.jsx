/**
 * Ejemplo Componente Funcional
 */

 import React, { useEffect, useState } from "react";

 const Clock = () => {

   const defaultState = {
     fecha: new Date(),
     edad: 0,
     nombre: 'Diego',
     apellidos: 'Vistoso',
   };
 
   const [user, setUser] = useState(defaultState);
 
   useEffect(() => {
     const intervalAge = setInterval(() => {
       actualiceUser();
     }, 1000);
     return () => {
       clearInterval(intervalAge);
     };
   });
 
   const actualiceUser = () => {
     return setUser({
       fecha: new Date(),
       edad: user.edad + 1,
       nombre: user.nombre,
       apellidos: user.apellidos,
     });
   };

   return (
     <div>
       <h2>Hora Actual: { user.fecha.toLocaleTimeString() }</h2>
       <h2>Usuario: { user.nombre } { user.apellidos }</h2>
       <h2>Edad: { user.edad }</h2>
     </div>
   );
 };
 
 export default Clock;