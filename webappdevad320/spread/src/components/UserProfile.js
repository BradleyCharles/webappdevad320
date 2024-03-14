import { useState } from "react";

function User() {
  const [userProfile, setUserProfile] = useState({
    name: "Name",
    email: "Email",
    address: {
      street: "Street",
      city: "City",
      country: "Country",
    },
  });

  const UpdateAddress = () => {
    setUserProfile({
      ...userProfile,
      address: {
        ...userProfile,
        street: "College",
        city: "Lake City",
        country: "USA",
      },
    });
  };

  return (
    <div>
      <button onClick={UpdateAddress}>Update Info</button>
      <div>
        <ul>
          <li>Name: {userProfile.name}</li>
          <li>e-mail: {userProfile.email}</li>
          <ul>
            <li>Street: {userProfile.address.street}</li>
            <li>City: {userProfile.address.city}</li>
            <li>Country: {userProfile.address.country}</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default User;
