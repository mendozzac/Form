const Login = () => {
  return (
    <form>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Contraseña"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Recordar
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default Login;
