import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = true;
    const passwordIsValid = true;

    if (!emailIsValid || !passwordIsValid) {
      alert("Los datos son incorrectos");
      return;
    }

    alert(`Su email es: ${data.email} y su contraseña es: ${data.password}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={handleChange} />
        <input type="text" name="userName" onChange={handleChange} />
        <input type="text" name="password" onChange={handleChange} />
        <button>Ingresar</button>
      </form>
    </div>
  );
};

export default Form;
