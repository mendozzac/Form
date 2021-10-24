import { useState } from "react";

const PersonalData = ({ onSubmit }) => {
  const initialPersonalData = {
    name: "",
    lastName: "",
    birthday: "",
    age: "",
    email: "",
  };

  const [personalData, setPersonalData] = useState(initialPersonalData);

  const changeData = (event) => {
    setPersonalData({
      ...personalData,
      [event.target.id]: event.target.value,
    });
  };

  const resetForm = () => {
    setPersonalData(initialPersonalData);
  };

  const onCreatePerson = (event) => {
    event.preventDefault();
    onSubmit(personalData);
    resetForm();
  };

  const disabledButton = () => {
    if (
      personalData.name &&
      personalData.lastName &&
      personalData.birthday &&
      personalData.email
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form autoComplete="off" onSubmit={onCreatePerson}>
      <div className="row">
        <div className="col">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escribe aquí tu nombre"
            id="name"
            value={personalData.name}
            onChange={changeData}
            required
          />
        </div>
        <div className="col">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            placeholder="Y aquí tu apellido"
            id="lastName"
            value={personalData.lastName}
            onChange={changeData}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control"
            id="birthday"
            value={personalData.birthday}
            onChange={changeData}
            required
          />
        </div>
        <div className="col-2">
          <label>Edad</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={personalData.age}
            onChange={changeData}
            readOnly
          />
        </div>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          autoComplete="off"
          type="email"
          className="form-control"
          placeholder="Aquí va el email"
          id="email"
          value={personalData.email}
          onChange={changeData}
          required
        />
        <small id="emailHelp" className="form-text text-muted">
          Nunca compartiremos tu correo electrónico con nadie más.
        </small>
      </div>
      <div className="button-container">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={disabledButton()}
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default PersonalData;
