const AccessData = () => {
  return (
    <form>
      <div className="form-group">
        <div className="col">
          <label>Alias</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
          />
        </div>
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Contraseña"
        />

        <label>Confirma Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword2"
          placeholder="Contraseña"
        />
      </div>
      <button type="submit" className="btn btn-primary ">
        Enviar
      </button>
    </form>
  );
};

export default AccessData;
