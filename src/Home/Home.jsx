import Header from "../Header/Header";
import "./Home.css";

import React, { useState } from "react";
import Data from "../Data";

import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer/Footer";

import { FaCheck } from "react-icons/fa";


const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const blogitem = Data.map((item) => {
    return (
      <div className="col-md-4" key={item.price}>
        <div className="box">
          <img src={item.img} alt="" />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
          <button>
            <a href="/">Order Now</a>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <section className="First-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Good Food choices are good investments</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                reprehenderit, velit a ea, repudiandae dignissimos.
              </p>
              <div className="first-button">
                <button>Order now</button>
                <button>learn more</button>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1>1287+</h1>
              <h6>Saving</h6>
            </div>
            <div className="col-md-3">
              <h1>5786+</h1>
              <h6>photos</h6>
            </div>
            <div className="col-md-3">
              <h1>1440+</h1>
              <h6>rockets</h6>
            </div>
            <div className="col-md-3">
              <h1>7110+</h1>
              <h6>globes</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="./images/back.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <h2>
                we pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident officiis culpa, vel cum repudiandae.
              </p>
              <button>learn more</button>
            </div>
          </div>
        </div>
      </section>
      <section className="many-foods">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                we make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at
                velit fugit porro magnam labore ad nam blanditiis provident!
                Corporis esse obcaecati deleniti eum iure quae incidunt culpa
                earum voluptas.
              </p>
              <ul className="list-unstyled">
                <li> <FaCheck style={{marginRight:'10px'}}/> eum iure quae incidunt culpa.</li>
                <li> <FaCheck  style={{marginRight:'10px'}} /> eum iure quae incidunt culpa.</li>
                <li> <FaCheck   style={{marginRight:'10px'}} /> eum iure quae incidunt culpa.</li>
              </ul>
              <button>learn more</button>
            </div>
            <div className="col-md-6">
              <img src="./images/10.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="stomach ">
        <div className="container p-5">
          <div className="stomach-div text-center p-5">
            <h2>
              when a man's stomach is full it makes no <br /> differience
              whether he is rich or poor.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              tempore praesentium <br /> deserunt repudiandae laborum?
              Reiciendis nemo obcaecati.
            </p>
            <a href="/">Watch our story</a>
          </div>
        </div>
      </section>
      <section className="Explore">
        <div className="container">
          <div className="main-explore text-center">
            <h2>Explore Our Foods</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              reiciendis suscipit, temporibus <br /> eveniet atque repudiandae.
              Minima, sed, quae hic ut neque, quas <br /> error beatae aliquid
              rem deserunt alias aliquam perferendis.
            </p>
          </div>
          <div className="row">{blogitem}</div>
        </div>
      </section>
      <section className="slider">
        <h1>Testimonials</h1>

        <div className="container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img src="./images/t.jpg" alt="" />

              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quas animi, nam exercitationem quidem cum aliquid
                  delectus sed.{" "}
                </p>
                <span>Simab Dave - Web Designer</span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/pt2.jpg" alt="" />

              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quas animi, nam exercitationem quidem cum aliquid
                  delectus sed.{" "}
                </p>
                <span>Johnathan Doe - UX Designer</span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
