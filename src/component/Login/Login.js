import { useState } from "react";

const Login = () => {
  const initialLogin = {
    username: "",
    password: "",
  };

  const [login, setLogin] = useState(initialLogin);

  const changeData = (event) => {
    setLogin({
      ...login,
      [event.target.id]: event.target.value,
    });
  };

  const disabledButton = () => {
    if (login.username && login.password) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form autoComplete="off">
      <div className="col">
        <label>Alias</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de usuario"
          id="username"
          value={login.username}
          onChange={changeData}
          required
        />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={login.password}
          onChange={changeData}
          placeholder="Contraseña"
          required
        />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="check" />
        <label className="form-check-label">Recordar</label>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={disabledButton()}
      >
        Enviar
      </button>
    </form>
  );
};

export default Login;
