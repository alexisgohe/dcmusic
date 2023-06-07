import React from "react";

import "../css/Banner.css";

import {images} from "../data/Global"
import { TitleCategory } from "./TitleCategory";
import { CardImg } from "./CardImg";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner_container">
      <div className="banner_text">
        <TitleCategory $banner>Recomendados</TitleCategory>
        <span className="span_banner">Macaco - Coincidir</span>
        <p className="p_banner">
          La canción cuenta con un videoclip basado en una idea de su
          realizador, Gus Carballo, y del propio Macaco. Es la historia del
          encuentro / desencuentro de dos invidentes, que se pierden la pista
          tras enamorarse como consecuencia de un encuentro fortuito en la barra
          de un bar. Estrenado el 23 de noviembre de 2015.
        </p>
      </div>
      <div className="banner_videocard">
        <Link to="/macaco"> <CardImg src={`${images.macaco}`} alt="Disco Macaco - Coincidir" /> </Link> 
      </div>
    </section>
  );
}
