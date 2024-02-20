

export default function Navigation() {

  return (
    <header className="navigation">
      <a href="index.html">
        <img src="images/logo.png" alt="Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="classes.html">Paintings</a>
          </li>
          <li>
            <a href="spells.html">Drawings</a>
          </li>
          <li>
            <a href="tools.html">Pottery</a>
          </li>
          <li>
          <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
