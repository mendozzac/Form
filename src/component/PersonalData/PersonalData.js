const PersonalData = () => {
  return (
    <form>
      <div class="row">
        <div class="col">
          <label>Nombre</label>
          <input type="text" class="form-control" placeholder="First name" />
        </div>
        <div class="col">
          <label>Apellido</label>
          <input type="text" class="form-control" placeholder="Last name" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>Birthday</label>
          <input type="date" class="form-control" />
        </div>
        <div class="col">
          <label>Age</label>

          <input type="number" class="form-control" readOnly />
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    </form>
  );
};

export default PersonalData;
