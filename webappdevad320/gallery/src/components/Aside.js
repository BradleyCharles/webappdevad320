export default function Aside() {
  return (
    <aside>
      <h2>NPC's</h2>
      <hr />
      <div className="blueberry">
        <ul className="slides">
          <li>
            <img src="images/skele.png" alt="Skele" />
          </li>
          <li>
            <img src="images/orc.png" alt="Orc" />
          </li>
      
        </ul>
      </div>

      <h2>Local events</h2>
      <hr />
      <ul>
        <li>Proin quis semper lacus.</li>
        <li>Nullam feugiat accumsan ex venenatis cursus.</li>
      
      </ul>
    </aside>
  );
}
