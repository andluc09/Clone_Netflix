import React, { useContext, useState } from "react";
import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import { AuthContext } from "../Context/UserContext";
import toast, { Toaster } from "react-hot-toast";

function useUpdateMylist() {
  const { User } = useContext(AuthContext);
  const [isMyListUpdates, setisMyListUpdates] = useState(false);

  function notify() {
    toast.success("  Título adicionado à Minha Lista  ");
  }
  function alertError(message) {
    toast.error(message);
  }

  const addToMyList = (movie) => {
    updateDoc(doc(db, "MyList", User.uid), { movies: arrayUnion(movie) })
      .then(() => {
        console.log(" Dado adicionado à Minha Lista ");
        notify();
        setisMyListUpdates(true);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alertError(error.message);
      });
  };

  const removeFromMyList = (movie) => {
    updateDoc(doc(db, "MyList", User.uid), { movies: arrayRemove(movie) })
      .then(() => {
        toast.success("  Título removido da Minha Lista  ");
        setisMyListUpdates(true);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const PopupMessage = (
    <Toaster
      toastOptions={{
        style: {
          padding: "1.5rem",
          backgroundColor: "#f4fff4",
          borderLeft: "6px solid lightgreen",
        },
      }}
    />
  );

  return { addToMyList, removeFromMyList, PopupMessage, isMyListUpdates };
}

export default useUpdateMylist;
