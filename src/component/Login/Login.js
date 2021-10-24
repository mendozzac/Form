const Login = () => {
  return (
    <form>
      <div className="col">
        <label>Alias</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Contraseña"
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label">Recordar</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default Login;
