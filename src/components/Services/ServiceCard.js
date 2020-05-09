/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ShapeBg from "../../img/servicesShape.webp";

const ServiceCard = ({ cardIcon, cardTitle, cardNumber }) => (
  <div css={styles} className="serviceCard">
    <i className={cardIcon}></i>
    <div className="cardInfo">
      <h3>{cardTitle}</h3>
      <p>
        Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly
        good ruddy!
      </p>
      <div className="cardDesc">
        <a href="#/">
          <i className="fas fa-arrow-circle-right fa-lg"></i>
          <span>GET STARTED</span>
        </a>
      </div>
    </div>
    <div className="cardBg">
      <h4>{cardNumber}</h4>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 380px;
  background: #fff;
  cursor: pointer;
  &:hover {
    > i {
      color: #eb566c;
    }
    .cardDesc {
      a {
        color: #eb566c;
      }
    }
  }
  > i {
    padding: 100px 0 0 50px;
    transition: color 600ms ease-in-out;
  }
  .cardInfo {
    padding: 70px 50px 40px 50px;
    color: #28395a;
    h3 {
      font-size: 27px;
      line-height: 1;
    }
    p {
      margin: 20px 0 30px 0;
      line-height: 2.1;
      font-weight: 400;
      font-size: 15px;
    }
  }
  .cardDesc {
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      color: #28395a;
      transition: color 600ms ease-in-out;
      span {
        font-size: 14px;
        font-weight: 600;
        margin-left: 14px;
        display: block;
      }
    }
  }
  .cardBg {
    width: 100%;
    height: 90px;
    padding: 6px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background: url('${ShapeBg}') no-repeat center/cover;
    h4 {
      color: #eb566c;
      font-size: 44px;
      line-height: 1;
    }
  }
  @media (max-width: 900px) {
    max-width: 500px;
    margin: 20px 0;
  }
  @media (min-width: 901px) and (max-width: 1288px) {
    max-width: 48%;
    margin: 20px 0;
  }
`;

export default ServiceCard;
