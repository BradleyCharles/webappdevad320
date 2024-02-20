export default async function Main({ header }) {
  return (
    <main>
      <h1>{header}</h1>
      <hr />
      <a href="art1.js">
        {" "}
        <img className="right" src="images/art/art1.jpg" alt="art1" />
      </a>
      <div className="contact_page">
        <h3>Phone</h3>
        <p>
          (435) 418-3979
        </p>
        <h3>email</h3>
        <p>
          kaylee@kayleechenille.com
        </p>
        <h3>Instagram</h3>
        <p>
          @kayleechenille
        </p>
        <h3>email</h3>
        <p>
          kaylee@kayleechenille.com
        </p>
      </div>
    </main>
  );
}
