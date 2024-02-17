const UserProfile = (props) => {
  const email = `${props.first.toLowerCase()}.${props.last.toLowerCase()}@example.com`;
  return (
    <div className="profile-card">
      <h2>{props.first}'s Profile</h2>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="User"
        class="photo"
      />
      <p>
        Name: {props.first} {props.last}
      </p>
      <p>
        Email: {props.first}.{props.last}@example.com
      </p>
      <a href={`mailto:${email}`}>Send Email</a>
    </div>
  );
};

export default UserProfile; //Need to include data for props.first and props.last in app.js