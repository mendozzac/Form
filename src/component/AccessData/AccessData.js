const AccessData = () => {
  return (
    <form>
      <div class="form-group">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre de usuario"
          />
        </div>
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Contraseña"
        />
      </div>
    </form>
  );
};

export default AccessData;
