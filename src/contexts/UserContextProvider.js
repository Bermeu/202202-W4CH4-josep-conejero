import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //const [kitten, setKitten] = useState(kittenAPI);
  /* const addKitty = () => {};
  const modifyKitty = () => {};
  const removeKitty = (kittenId) => {
    const eliminateKitten = kitten.filter((kitten) => kitten.id !== kittenId);
    setKitten(eliminateKitten);
  }; */
  return;
  <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
