

export default function Navigation() {

  return (
    <header className="navigation">
      {/* <a href="index.html">
        <img src="images/logo.png" alt="Logo" />
      </a> */}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/paintings">Paintings</a>
          </li>
          <li>
            <a href="/drawings">Drawings</a>
          </li>
          <li>
            <a href="/pottery">Pottery</a>
          </li>
          <li>
          <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
