import { createContext } from "react";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Config/firebase";
export const UsersContext = createContext();

// eslint-disable-next-line react/prop-types
const UsersFormProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [usersInfo, setUsersInfo] = useState([]);
  const [editUserInfo, setEditUserInfo] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");

  const collectionUsersRef = collection(db, "Users");

  // Add Users Info into Firebase
  const submitUserForm = async (e) => {
    e.preventDefault();
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (!userName.trim()) {
      console.log("Name is required");
      return;
    } else if (userName.length < 4) {
      console.log("Name should be at least 4 characters long");
      return;
    }

    if (!userEmail.trim()) {
      console.log("Email is required");
      return;
    } else if (!isValidEmail(userEmail)) {
      console.log("Invalid Email Address");
      return;
    }

    if (!userAddress.trim()) {
      console.log("Address is required");
      return;
    }

    if (!userPhone.trim()) {
      console.log("Phone is required");
      return;
    }

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

  // Delete Users From List
  const DeleteUser = async (id) => {
    const userDoc = doc(db, "Users", id);
    await deleteDoc(userDoc);
    setUsersInfo((prevUsersInfo) =>
      prevUsersInfo.filter((user) => user.id !== id)
    );
  };

  // Update Users Info
  const updateUserInfo = async (id) => {
    const usersDoc = doc(db, "Users", id);
    const updatedFields = {};

    if (updatedName !== "") {
      updatedFields.Name = updatedName;
    }
    if (updatedEmail !== "") {
      updatedFields.Email = updatedEmail;
    }
    if (updatedAddress !== "") {
      updatedFields.Address = updatedAddress;
    }
    if (updatedPhone !== "") {
      updatedFields.Phone = updatedPhone;
    }

    try {
      await updateDoc(usersDoc, updatedFields);
      setUsersInfo((prevUsersInfo) =>
        prevUsersInfo.map((user) => {
          if (user.id === id) {
            return {
              ...user,
              ...updatedFields,
            };
          } else {
            return user;
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  // UseEffect Fn
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
        DeleteUser,
        editUserInfo,
        setEditUserInfo,
        updateUserInfo,
        setUpdatedAddress,
        setUpdatedEmail,
        setUpdatedName,
        setUpdatedPhone,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersFormProvider;
