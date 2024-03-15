import { produce } from "immer";
import React, { useState } from "react";

function UserInformation() {
  const [user] = useState({
    name: "Name",
    email: "Email",
    contactDetails: {
      phone: "Phone",
      address: {
        street: "Street",
        city: "City",
        country: "Country",
      },
    },
    preferences: "Preferences",
  });

  // Using produce to create a new modified user
  const newUser = produce(user, (draft) => {
    // Accessing directly the property you want to modify
    if (draft.name === "Name") {
      draft.name = "John";
      draft.email = "john@email.com";
      draft.contactDetails.phone = "(432) 555 6546";
      draft.contactDetails.address.street = "College St";
      draft.contactDetails.address.city = "Community Town";
      draft.contactDetails.address.country = "Collegeria";
      draft.preferences = "Dark Mode";
    }
  });

  return (
    <div>
      <div>
        <ul>
          <li>Name: {user.name}</li>
          <li>E-Mail: {user.email}</li>
          <li>Phone: {user.contactDetails.phone}</li>
          <ul>
            <li>Street: {user.contactDetails.address.street}</li>
            <li>City: {user.contactDetails.address.city}</li>
            <li>Country: {user.contactDetails.address.country}</li>
          </ul>
          <li>Preferences: {user.preferences}</li>
        </ul>
        <ul>
          <li>Name: {newUser.name}</li>
          <li>E-Mail: {newUser.email}</li>
          <li>Phone: {newUser.contactDetails.phone}</li>
          <ul>
            <li>Street: {newUser.contactDetails.address.street}</li>
            <li>City: {newUser.contactDetails.address.city}</li>
            <li>Country: {newUser.contactDetails.address.country}</li>
          </ul>
          <li>Preferences: {newUser.preferences}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserInformation;
