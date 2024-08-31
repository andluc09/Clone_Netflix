import React from "react";
import Banner from "../componets/Banner/Banner";
import Footer from "../componets/Footer/Footer";
import RowPost from "../componets/RowPost/RowPost";
import {
  originals,
  comedy,
  horror,
  Adventure,
  SciFi,
  Animated,
  War,
  trendingSeries,
  UpcomingMovies,
} from "../Constants/URLs";

function Series() {
  return (
    <div>
      <Banner url={trendingSeries}></Banner>
      <div className="w-[99%] ml-1">
        <RowPost
          first
          title="Séries em Alta"
          url={trendingSeries}
          key={trendingSeries}
        ></RowPost>
        <RowPost title="Animação" url={Animated} key={Animated}></RowPost>
        <RowPost
          title="Originais Netflix"
          islarge
          url={originals}
          key={originals}
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

export default Series;
