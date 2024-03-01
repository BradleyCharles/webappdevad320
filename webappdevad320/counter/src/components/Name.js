import MessageSender from "./MessageSender.js";
import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </form>
  );
};

export default Name;
