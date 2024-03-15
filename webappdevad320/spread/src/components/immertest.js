import { useImmer } from "use-immer";

const UserProfileWithImmer = () => {
  const [userProfile, setUserProfile] = useImmer({
    name: "",
    email: "",
    contactDetails: {
      phone: "",
      address: "",
    },
    preferences: {
      newsletter: false,
      notifications: true,
    },
  });

  const updateContactDetails = (newPhone, newAddress) => {
    setUserProfile((draft) => {
      draft.contactDetails.phone = newPhone;
      draft.contactDetails.address = newAddress;
    });
  };

  const toggleNewsletterSubscription = () => {
    setUserProfile((draft) => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  const storeInformation = () => {
    // Here you can store the userProfile state or perform any other action
    console.log("Storing information:", userProfile);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={userProfile.name}
          onChange={(e) =>
            setUserProfile((draft) => {
              draft.name = e.target.value;
            })
          }
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={userProfile.email}
          onChange={(e) =>
            setUserProfile((draft) => {
              draft.email = e.target.value;
            })
          }
        />
      </div>
      <div>
        <h3>Contact Details</h3>
        <label>Phone:</label>
        <input
          type="text"
          value={userProfile.contactDetails.phone}
          onChange={(e) =>
            updateContactDetails(
              e.target.value,
              userProfile.contactDetails.address
            )
          }
        />
        <label>Address:</label>
        <input
          type="text"
          value={userProfile.contactDetails.address}
          onChange={(e) =>
            updateContactDetails(
              userProfile.contactDetails.phone,
              e.target.value
            )
          }
        />
      </div>
      <div>
        <h3>Preferences</h3>
        <label>
          <input
            type="checkbox"
            checked={userProfile.preferences.newsletter}
            onChange={toggleNewsletterSubscription}
          />
          Subscribe to Newsletter
        </label>
      </div>
      <button onClick={storeInformation}>Store Information</button>
      <div>
        <h2>Stored Information</h2>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Phone: {userProfile.contactDetails.phone}</p>
        <p>Address: {userProfile.contactDetails.address}</p>
        <p>
          Newsletter Subscription:{" "}
          {userProfile.preferences.newsletter ? "Subscribed" : "Not Subscribed"}
        </p>
      </div>
    </div>
  );
};

export default UserProfileWithImmer;
