import React, { useEffect, useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?length=5&number=3"
      );
      const words = await response.json();

      const modifiedString =
        words[0].replace(/i/g, "!").replace(/e/g, "3") +
        words[1].charAt(0).toUpperCase() +
        words[1].slice(1).replace(/i/g, "!").replace(/b/g, "8") +
        words[2].replace(/l/g, "1").replace(/a/g, "@");

      setPassword(modifiedString);
      console.log(modifiedString); // Move the console.log here
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Your password is: {password}</p>
    </div>
  );
};

export default PasswordGenerator;
