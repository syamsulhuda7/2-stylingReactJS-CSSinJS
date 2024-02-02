import { useState } from "react";
import styled from "styled-components";

const Button = styled.button `
    position : absolute;
    padding : 10px;
    font-size : 30px;
    border-radius : 0px 50px 50px 0px;
    opacity : 30%;
    top : 330px;
    cursor : pointer;
    transition : .2s ease-in-out;

    &:hover {
        opacity : 35%;
        scale : 105%;
    }
`;

const Tombol = styled.button `
    position : absolute;
    padding : 10px;
    font-size : 30px;
    border-radius : 50px 0px 0px 50px;
    opacity : 30%;
    top : 330px;
    right : 0;
    cursor : pointer;
    transition : .2s ease-in-out;

    &:hover {
        opacity : 35%;
        scale : 105%;
    }
`;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      imgUrl: "src/assets/Styling/Body/images/1.jpg",
    },
    {
      id: 2,
      imgUrl: "src/assets/Styling/Body/images/2.jpg",
    },
    {
      id: 3,
      imgUrl: "src/assets/Styling/Body/images/3.jpg",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <Button onClick={prevSlide}>+</Button>
      <img src={slides[currentSlide].imgUrl} alt={`Slide ${currentSlide + 1}`} />
      <Tombol onClick={nextSlide}>+</Tombol>
    </div>
  );
};

export default Carousel;
