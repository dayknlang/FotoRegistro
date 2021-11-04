import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import arrow from "../../assets/img/seta.svg";
import arrowHover from "../../assets/img/setahover.svg";
import img3 from "../../assets/img/Img3.png";
import img4 from "../../assets/img/Img4.png";
import img5 from "../../assets/img/Img5.png";
import img6 from "../../assets/img/Img6.png";
import CardProdOffers from "../CardProducts/CardProdOffers";

const ArrowSlide = styled.div`
  background: url(${arrow}) center no-repeat padding-box;
  border-radius: 28px 0px 0px 28px;
  width: 117px;
  height: 229px;
  opacity: 0.83;
  left: 750px;
  top: 110px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  margin-top: 8.5px;
  margin-bottom: 12px;
  &:hover {
    background: transparent url(${arrowHover}) center no-repeat padding-box;
  }
`;

const CarouselOffers = () => {
  const settings = {
    nextArrow: <ArrowSlide />,
    slidesToScroll: 1,
    slidesToShow: 2.1,
    centerPadding: "42px",
    centerMode: true,
    infinite: true,
    initialSlide: 1,
  };

  return (
    <Slider {...settings}>
      <CardProdOffers
        discountStamp={"XX%"}
        backgroundImage={img3}
        productName={"Foto"}
        productNameBold={"Retrô"}
        productDescription={"Kit com 20 un"}
        price={"De"}
        priceDetail={"R$ XX,XX"}
        priceDiscount={"Por"}
        priceDiscountBold={"R$ XX,XX"}
      />{" "}
      <CardProdOffers
        discountStamp={"XX%"}
        backgroundImage={img4}
        productName={"Pôster"}
        prouctNameBold={"Premium"}
        price={"De"}
        priceDetail={"R$ XX,XX"}
        priceDiscount={"Por"}
        priceDiscountBold={"R$ XX,XX"}
      />{" "}
      <CardProdOffers
        discountStamp={"30%"}
        backgroundImage={img5}
        productName={"Imã"}
        productNameBold={"Quadrado"}
        productDescription={"Kit com 9 un"}
        price={"De"}
        priceDetail={"R$ XX,XX"}
        priceDiscount={"Por"}
        priceDiscountBold={"R$ XX,XX"}
      />{" "}
      <CardProdOffers
        discountStamp={"XX%"}
        backgroundImage={img6}
        productName={"Calendário de Mesa"}
        productNameBold={"2022"}
        price={"De"}
        priceDetail={"R$ XX,XX"}
        priceDiscount={"Por"}
        priceDiscountBold={"R$ XX,XX"}
      />{" "}
    </Slider>
  );
};

export default CarouselOffers;
