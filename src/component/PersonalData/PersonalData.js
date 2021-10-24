const PersonalData = () => {
  return (
    <form>
      <div className="row">
        <div className="col">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escribe aquí tu nombre"
          />
        </div>
        <div className="col">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            placeholder="Y aquí tu apellido"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <label>Fecha de nacimiento</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-2">
          <label>Edad</label>
          <input type="number" className="form-control" readOnly />
        </div>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Aquí va el email"
        />
        <small id="emailHelp" className="form-text text-muted">
          Nunca compartiremos tu correo electrónico con nadie más.
        </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default PersonalData;
