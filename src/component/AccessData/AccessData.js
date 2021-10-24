import { useState } from "react";

const AccessData = (personalData) => {
  const initialAccessData = {
    username: "",
    password: "",
    repeatPassword: "",
  };

  const [accessData, setAccessData] = useState(initialAccessData);

  const changeData = (event) => {
    setAccessData({
      ...accessData,
      [event.target.id]: event.target.value,
    });
  };

  const disabledButton = () => {
    if (
      accessData.username &&
      accessData.password &&
      accessData.repeatPassword
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form autoComplete="off">
      <div className="form-group">
        <div className="col">
          <label>Alias</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
            id="username"
            value={accessData.username}
            onChange={changeData}
            required
          />
        </div>
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={accessData.password}
          onChange={changeData}
          placeholder="Contraseña"
          required
        />

        <label>Confirma Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="repeatPassword"
          value={accessData.repeatPassword}
          onChange={changeData}
          placeholder="Contraseña"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary "
        disabled={disabledButton()}
      >
        Enviar
      </button>
    </form>
  );
};

export default AccessData;
