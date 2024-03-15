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
// import * as Yup from "yup";

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
  const [errors, setErrors] = useState({
    userName: "",
    userEmail: "",
    userAddress: "",
    userPhone: "",
  });
  const collectionUsersRef = collection(db, "Users");

  // email validation
  const isValidEmail = (email) => {
    const emailRegx = /^\S+@\S+\.\S+$/;
    return emailRegx.test(email);
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};
    if (!userName || userName.trim() === 0) {
      newErrors.userName = "Name is required";
    } else if (userName.trim().length < 4) {
      newErrors.userName = "Name must be at least 4 characters ";
    }

    if (!userEmail) {
      newErrors.userEmail = "Email is required";
    } else if (!isValidEmail(userEmail)) {
      newErrors.userEmail = "Invalid email format";
    }

    // email is valid
    if (!userAddress) {
      newErrors.userAddress = "Address is required";
    }

    // Phone is Valid
    if (!userPhone) {
      newErrors.userPhone = "Phone is required";
    } else if (userPhone.trim().length < 10) {
      newErrors.userPhone = "Phone  must be 10 digits";
    }

    setErrors(newErrors);
    console.log(errors);
    return Object.keys(newErrors).length === 0;
  };

  // Add Users Info into Firebase
  const submitUserForm = async (e) => {
    e.preventDefault();

    try {
      const isValid = validateForm(); // Validation moved here
      if (isValid) {
        console.log("form submitted is valid", {
          userName,
          userEmail,
          userAddress,
          userPhone,
        });

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
      } else {
        console.log("form not valid");
      }
    } catch (error) {
      console.log(error);
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
        errors,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersFormProvider;

// const submitUserForm = async (e) => {
//   e.preventDefault();

//   try {
//     const isValid = validateForm();
//     if (isValid) {
//       console.log("form submitted is valid", {
//         userName,
// // Add Users Info into Firebase
//         userEmail,
//         userAddress,
//         userPhone,
//       });

//       await addDoc(collectionUsersRef, {
//         Name: userName,
//         Email: userEmail,
//         Phone: userPhone,
//         Address: userAddress,
//       });
//       getUsersInfoList();
//       setUserAddress("");
//       setUserEmail("");
//       setUserPhone("");
//       setUserName("");
//     } else {
//       console.log("formm not valid");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
