/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import PricingCard from "./PricingCard";
import PricingInfo from "./PricingInfo";

const Pricing = () => (
  <section css={styles} className="pricing" id="pricing">
    <Container>
      <PricingCard />
      <PricingInfo />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 50px 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 920px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Pricing;
