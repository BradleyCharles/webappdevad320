import { useImmer } from "use-immer";

function UserInformation() {
  const [user, setUser] = useImmer({
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
    preferences: {
      newsletter: false,
      notifications: true,
    },
  });

  const [nameInput, setNameInput] = useImmer("");
  const [emailInput, setEmailInput] = useImmer("");
  const [phoneInput, setPhoneInput] = useImmer("");
  const [streetInput, setStreetInput] = useImmer("");
  const [cityInput, setCityInput] = useImmer("");
  const [countryInput, setCountryInput] = useImmer("");
  const [newsletterChecked, setNewsletterChecked] = useImmer(false);
  const [notificationsChecked, setNotificationsChecked] = useImmer(true);

  const updateUser = () => {
    setUser((draft) => {
      draft.name = nameInput || user.name;
      draft.email = emailInput || user.email;
      draft.contactDetails.phone = phoneInput || user.contactDetails.phone;
      draft.contactDetails.address.street =
        streetInput || user.contactDetails.address.street;
      draft.contactDetails.address.city =
        cityInput || user.contactDetails.address.city;
      draft.contactDetails.address.country =
        countryInput || user.contactDetails.address.country;
      draft.preferences.newsletter = newsletterChecked;
      draft.preferences.notifications = notificationsChecked;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Left Div containing information */}
      <div style={{ marginRight: "20px" }}>
        <h2>User Information</h2>
        <ul name={"Left UL"} style={{ textAlign: "left" }}>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Phone:</strong> {user.contactDetails.phone}
          </li>
          <li>
            <strong>Address:</strong>
            <ul>
              <li>
                <strong>Street:</strong> {user.contactDetails.address.street}
              </li>
              <li>
                <strong>City:</strong> {user.contactDetails.address.city}
              </li>
              <li>
                <strong>Country:</strong> {user.contactDetails.address.country}
              </li>
            </ul>
          </li>
          <li>
            <strong>Preferences:</strong>
            <ul>
              <li>
                Newsletter:{" "}
                {user.preferences.newsletter ? "Subscribed" : "Not Subscribed"}
              </li>
              <li>
                Notifications:{" "}
                {user.preferences.notifications ? "Enabled" : "Disabled"}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right Div containing input boxes */}
      <div>
        <h2>Update Information</h2>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder="Enter Email"
        />
        <br />
        <input
          type="text"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
          placeholder="Enter Phone"
        />
        <br />
        <input
          type="text"
          value={streetInput}
          onChange={(e) => setStreetInput(e.target.value)}
          placeholder="Enter Street"
        />
        <br />
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Enter City"
        />
        <br />
        <input
          type="text"
          value={countryInput}
          onChange={(e) => setCountryInput(e.target.value)}
          placeholder="Enter Country"
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={newsletterChecked}
            onChange={() => setNewsletterChecked(!newsletterChecked)}
          />
          Newsletter
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={notificationsChecked}
            onChange={() => setNotificationsChecked(!notificationsChecked)}
          />
          Notifications
        </label>
        <br />
        <button onClick={updateUser}>Update</button>
      </div>
    </div>
  );
}

export default UserInformation;
