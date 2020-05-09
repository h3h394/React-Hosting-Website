/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import RocketImg from "../../img/rocketImg.webp";
import WhiteShapeTopImg from "../../img/whiteShapeTop.webp";
import WhiteShapeBottomImg from "../../img/whiteShapeBottom.webp";

const PricingCard = () => (
  <div css={styles} className="pricingCard">
    <img src={WhiteShapeTopImg} alt="shape" className="shapeImg shapeTop" />
    <img
      src={WhiteShapeBottomImg}
      alt="shape"
      className="shapeImg shapeBottom"
    />
    <div className="imgWrapper">
      <img src={RocketImg} alt="rocket" />
    </div>
    <h3>$ 05.00</h3>
    <div className="divider"></div>
    <p>Increase traffic 50%</p>
    <p>Social Media Marketing</p>
    <p>10 Free Optimization</p>
    <p>24/7 support</p>
    <Button btnText="GET THE PLAN" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 340px;
  padding: 80px;
  background: #ff4f5b;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  position: relative;
  .shapeImg {
    position: absolute;
    &.shapeTop {
      top: 0;
      right: 0;
    }
    &.shapeBottom {
      bottom: 0;
      left: 0;
    }
  }
  .imgWrapper {
    width: 90px;
    height: 90px;
    background: #fce0d8;
    border-radius: 50%;
    display: flex;
    img {
      margin: auto;
      display: block;
      width: 50px;
      height: 50px;
    }
  }
  h3 {
    font-size: 32px;
    line-height: 1;
    margin: 40px 0 0 0;
  }
  .divider {
    width: 100%;
    margin: 30px 0;
    border: 1px solid #fff;
  }
  p {
    margin-bottom: 24px;
    font-size: 14px;
  }
  button {
    background: #fff;
    color: #111;
    font-weight: 600;
    position: relative;
    &:hover {
      background: #f32a48;
      color: #fff;
    }
  }
  @media (max-width: 920px) {
    max-width: 600px;
    margin-bottom: 60px;
  }
  @media (min-width: 921px) and (max-width: 1165px) {
    max-width: 44%;
  }
`;

export default PricingCard;
