const Navigation = () => {
  return (
    <nav aria-label="...">
      <ul class="pagination pagination-lg">
        <li class="page-item disabled">
          <a class="page-link" href="1" tabindex="-1">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="2">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="3">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
