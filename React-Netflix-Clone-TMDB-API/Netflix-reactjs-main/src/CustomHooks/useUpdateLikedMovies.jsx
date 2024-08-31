import React, { useContext, useState } from "react";
import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import { AuthContext } from "../Context/UserContext";
import toast, { Toaster } from "react-hot-toast";

function useUpdateLikedMovies() {
  const { User } = useContext(AuthContext);
  const [Error, setError] = useState(false);

  function notify() {
    toast.success("  Título adicionado à Lista de Curtidos  ");
  }
  function removeNotify() {
    toast.success("  Título removido da Lista de Curtidos  ");
  }
  function alertError(message) {
    toast.error(message);
  }

  const addToLikedMovies = (movie) => {
    updateDoc(doc(db, "LikedMovies", User.uid), {
      movies: arrayUnion(movie),
    }).then(() => {
      notify();
    });
  };

  const removeFromLikedMovies = (movie) => {
    updateDoc(doc(db, "LikedMovies", User.uid), {
      movies: arrayRemove(movie),
    })
      .then(() => {
        removeNotify();
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alertError(error.message);
        setError(true);
      });
  };

  const LikedMoviePopupMessage = (
    <Toaster
      toastOptions={{
        style: {
          padding: "1.5rem",
          backgroundColor: Error ? "#fff4f4" : "#f4fff4",
          borderLeft: Error ? "6px solid red" : "6px solid lightgreen",
        },
      }}
    />
  );

  return { addToLikedMovies, removeFromLikedMovies, LikedMoviePopupMessage };
}

export default useUpdateLikedMovies;
