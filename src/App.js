import React from "react";
import "./styles.css";
import JQUERY from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <header>
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" />
        <a class="navbar-brand" href="#" /> OAV
        <span class="navbar-toggler-icon" />
        <div class="collapse navbar-collapse" id="navbarNavDropdown" />
        <ul class="navbar-nav" />
        <li class="nav-item active" />
        <a class="nav-link" href="#">
          Inicio{" "}
        </a>
        <li class="nav-item" />
        <a class="nav-link" href="#">
          iniciar secion
        </a>
        <li class="nav-item dropdown" />
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        />
        Roles
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" />
        <a class="dropdown-item" href="#">
          Familiar o Amigo
        </a>
        <a class="dropdown-item" href="#">
          Adulto Mayor
        </a>
        <li class="nav-item" />
        <a class="nav-link" href="#" />
        Ayuda
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators" />
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

          <div class="carousel-inner" />
          <div class="carousel-item active">
            <img
              src="https://images.ctfassets.net/hrltx12pl8hq/VZW7M82mrxByGHjvze4wu/216d9ff35b6980d850d108a50ae387bf/Carousel_01_FreeTrial.jpg?fit=fill&w=800&h=450"
              class="imagen-uno"
              alt="..."
            />
          </div>
          <div class="carousel-item" />
          <img
            src="https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg"
            class="imagen-dos"
            alt="..."
          />
        </div>
        <div class="carousel-item" />
        <img
          src="https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1"
          class="imagen-tres"
          alt="..."
        />
      </div>

      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      />
      <span class="" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>

      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      />
      <span class="" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </header>
  );
}
