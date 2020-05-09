/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Button from "../GlobalComponents/Button";

const PricingInfo = () => (
  <div css={styles} className="pricingInfo">
    <Title text="Our Best Services" />
    <h2>Our Pricing</h2>
    <p>
      Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor incididunt ut
      labore egsfgt dolore magna aliqua. Ut encim ad minim veniam, quis nostrud
      exercitation ulclamco laboris nisi ufgut aliquip edgx ebrha.
    </p>
    <div className="priceBtn">
      <Button btnText="MONTHLY" />
      <Button btnText="YEARLY" />
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 600px;
  h2 {
    color: #28395a;
    font-size: 50px;
    margin: 34px 0 22px 0;
    line-height: 1;
  }
  p {
    color: #10285d;
    font-size: 15px;
    line-height: 2.3;
  }
  .priceBtn {
    padding: 60px 0 0 0;
    button {
      padding: 14px 8px;
      width: 120px;
      font-weight: 600;
      &:nth-child(1) {
        border-radius: 50px 0 0 50px;
      }
      &:nth-child(2) {
        border-radius: 0 50px 50px 0;
        color: #020230;
        background: #fce0d8;
      }
    }
  }
  @media (min-width: 921px) and (max-width: 1165px) {
    max-width: 50%;
  }
`;

export default PricingInfo;
