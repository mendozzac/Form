const AccessData = () => {
  return (
    <form autoComplete="off">
      <div className="form-group">
        <div className="col">
          <label>Alias</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
            required
          />
        </div>
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="Password"
          placeholder="Contraseña"
          required
        />

        <label>Confirma Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="Password"
          placeholder="Contraseña"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary ">
        Enviar
      </button>
    </form>
  );
};

export default AccessData;
