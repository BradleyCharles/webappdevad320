export default async function Header({ banner }) {
  return (
    <div className="banner">
      {/* <a href="#">
        <img src="/images/login.png" alt="Login" />
      </a> */}
      <h2>{banner || 'Kaylee Chenille'}</h2>
    </div>
  );
}