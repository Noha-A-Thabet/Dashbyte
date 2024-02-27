import { createContext } from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Config/firebase";
export const UsersContext = createContext();

// eslint-disable-next-line react/prop-types
const UsersFormProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [usersInfo, setUsersInfo] = useState([]);

  const collectionUsersRef = collection(db, "Users");

  // Submit Users Info into Firebase
  const submitUserForm = async () => {
    try {
      await addDoc(collectionUsersRef, {
        Name: userName,
        Email: userEmail,
        Phone: userPhone,
        Address: userAddress,
      });
      getUsersInfoList();
      setUserAddress("");
      setUserEmail("");
      setUserPhone("");
      setUserName("");
    } catch (error) {
      console.error(error);
    }
  };

  // get Users list
  const getUsersInfoList = async () => {
    try {
      const usersDocs = await getDocs(collectionUsersRef);
      const filiteredDocs = usersDocs.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsersInfo(filiteredDocs);
    } catch (error) {
      console.error(error);
    }
  };

  // get Docs grom firebase
  useEffect(() => {
    getUsersInfoList();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userAddress,
        setUserAddress,
        userPhone,
        setUserPhone,
        submitUserForm,
        usersInfo,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersFormProvider;
