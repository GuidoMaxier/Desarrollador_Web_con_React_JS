import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
