const AccessData = () => {
  return (
    <form>
      <div class="form-group">
        <div class="col">
          <input type="text" class="form-control" placeholder="Username" />
        </div>
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
    </form>
  );
};

export default AccessData;
