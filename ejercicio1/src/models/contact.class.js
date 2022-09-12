/* The class Contact has four properties: nombre, apellido, email, and conectado. It also has a
constructor that takes four parameters: nombre, apellido, email, and conectado. The constructor
assigns the values of the parameters to the properties */
export class Contact {
  nombre = "";
  apellido = "";
  email = "";
  conectado = false;

  constructor(nombre, apellido, email, conectado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.conectado = conectado;
  }
}
