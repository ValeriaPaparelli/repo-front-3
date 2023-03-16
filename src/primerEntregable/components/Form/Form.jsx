import { useState } from "react";
import "./Form.css";
import Card from "../Card/Card";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Form = () => {
  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
    sexo: "",
  });

  const [errorMessages, setErrorMessages] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = [];

    //Validación email
    if (!data.email.match(emailRegex)) errors.push("Email inválido");

    //Validación de userName
    if (data.userName.trim().length < 3)
      errors.push("El nombre de usuario debe contener al menos 3 caracteres");

    //Validación de password
    if (data.password.trim().length < 6)
      errors.push("La contraseña debe contener al menos 6 caracteres");

    //Validación de sexo
    if (data.sexo.length === 0) errors.push("Debe indicar el sexo");

    if (errors.length > 0) {
      setErrorMessages(errors);
    } else {
      setIsLogged(true);
    }
  };

  return (
    <div className="container-form">
      <h1 className="title">Formulario de registro</h1>
      {!isLogged ? (
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Ingrese un email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="userName"
              placeholder="Ingrese nombre de usuario"
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="Ingrese una contraseña"
              onChange={handleChange}
            />
            <select
              style={{
                width: "50%",
                height: "30px",
              }}
              name="sexo"
              onChange={handleChange}
            >
              <option value="" default>
                Seleccione el sexo
              </option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
            <button className="button-submit" type="submit">
              Ingresar
            </button>
          </form>
          {errorMessages.length > 0 && (
            <div className="errors">
              <p className="item-error">
                Por favor chequea que la información sea correcta
              </p>
              <ul>
                {errorMessages.map((errorMessage) => (
                  <li className="item-error" key={errorMessage}>
                    {errorMessage}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Card userName={data.userName} />
      )}
    </div>
  );
};

export default Form;
