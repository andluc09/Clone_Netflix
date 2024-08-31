import React from "react";
import { useEffect, useState, useContext } from "react";
import Banner from "../componets/Banner/Banner";
import Footer from "../componets/Footer/Footer";
import RowPost from "../componets/RowPost/RowPost";
import {
  originals,
  trending,
  comedy,
  horror,
  Adventure,
  SciFi,
  Animated,
  War,
  trendingSeries,
  UpcomingMovies,
} from "../Constants/URLs";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import { AuthContext } from "../Context/UserContext";

function Home() {
  const { User } = useContext(AuthContext);
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    getDoc(doc(db, "WatchedMovies", User.uid)).then((result) => {
      if (result.exists()) {
        const mv = result.data();
        setWatchedMovies(mv.movies);
      }
    });
  }, []);

  return (
    <div>
      <Banner url={trending}></Banner>
      <div className="w-[99%] ml-1">
        <RowPost first title="Em Alta" url={trending} key={trending}></RowPost>
        <RowPost title="Animação" url={Animated} key={Animated}></RowPost>
        {watchedMovies.length != 0 ? (
          <RowPost
            title="Filmes Assistidos"
            movieData={watchedMovies}
            key={"Watched Movies"}
          ></RowPost>
        ) : null}
        <RowPost
          title="Originais Netflix"
          islarge
          url={originals}
          key={originals}
        ></RowPost>
        <RowPost
          title="Séries Populares"
          url={trendingSeries}
          key={trendingSeries}
        ></RowPost>
        <RowPost title="Ficção Científica" url={SciFi}></RowPost>
        <RowPost title="Lançamentos" url={UpcomingMovies}></RowPost>
        <RowPost title="Comédia" url={comedy}></RowPost>
        <RowPost title="Aventura" url={Adventure}></RowPost>
        <RowPost title="Terror" url={horror}></RowPost>
        <RowPost title="Guerra" url={War}></RowPost>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
