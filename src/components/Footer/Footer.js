/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import FooterBg from "../../img/footerBg.webp";
import Container from "../GlobalComponents/Container";
import CardData from "./CardData";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  const [data, setData] = useState(CardData);

  return (
    <footer css={styles} id="contact">
      <Container>
        {data.map((cardItem, index) => (
          <div key={index} className="footerCard">
            {cardItem.cardLogo && <img src={cardItem.cardLogo} alt="logo" />}
            <h2>{cardItem.cardTitle}</h2>
            {cardItem.cardLink && <a href="#/">{cardItem.cardLink}</a>}
            {cardItem.cardLink2 && <a href="#/">{cardItem.cardLink2}</a>}
            {cardItem.cardLink3 && <a href="#/">{cardItem.cardLink3}</a>}
            {cardItem.cardLink4 && <a href="#/">{cardItem.cardLink4}</a>}
            {cardItem.cardText && <p>{cardItem.cardText}</p>}
          </div>
        ))}
      </Container>
      <BottomFooter />
    </footer>
  );
};

const styles = css`
  width: 100%;
  background: url('${FooterBg}') no-repeat center/cover;
  .container {
    padding: 140px 0 100px 0;
    display: flex;
    justify-content: space-between;
    .footerCard {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      max-width: 250px;
      &:nth-child(1) {
        max-width: 320px;
      }
      img {
        cursor: pointer;
        display: block;
      }
      h2 {
        padding: 12px 0 0 0;
        color: #fff;
        line-height: 1;
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 30px;
      }
      a {
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
        margin: 10px 0;
        color: #8ba4b1;
        transition: color 300ms ease-in-out, transform 500ms ease-in-out;
        &:hover {
          color: #eb566c;
          transform: translateX(10px);
        }
      }
      p {
        color: #8ba4b1;
        font-size: 15px;
        margin: 18px 0 0 0;
        line-height: 2;
      }
    }
  }
  @media (max-width: 640px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (min-width: 641px) and (max-width: 1000px) {
    .container {
      flex-wrap: wrap;
      .footerCard {
        max-width: 46%;
        &:nth-child(1),
        &:nth-child(2) {
          margin-bottom: 14px;
        }
        &:nth-child(1) {
          max-width: 46%;
        }
      }
    }
  }
`;

export default Footer;
