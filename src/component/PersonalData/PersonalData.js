const PersonalData = () => {
  return (
    <form>
      <div class="row">
        <div class="col">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            placeholder="Escribe aquí tu nombre"
          />
        </div>
        <div class="col">
          <label>Apellido</label>
          <input
            type="text"
            class="form-control"
            placeholder="Y aquí tu apellido"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-10">
          <label>Fecha de nacimiento</label>
          <input type="date" class="form-control" />
        </div>
        <div class="col-2">
          <label>Edad</label>

          <input type="number" class="form-control" readOnly />
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Aquí va el email"
        />
        <small id="emailHelp" class="form-text text-muted">
          Nunca compartiremos tu correo electrónico con nadie más.
        </small>
      </div>
    </form>
  );
};

export default PersonalData;
