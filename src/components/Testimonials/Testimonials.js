/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import TestimonialInfo from "./TestimonialsInfo";
import TestimonialsImg from "./TestimonialsImg";
import TestimonialShapeBg from "../../img/testimonialShape.webp";

const Testimonials = () => (
  <section css={styles} className="testimonials">
    <img src={TestimonialShapeBg} alt="shape" />
    <Container>
      <TestimonialInfo />
      <TestimonialsImg />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0 160px 0;
  position: relative;
  > img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 790px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 1010px) {
    > img {
      display: none;
    }
  }
`;

export default Testimonials;
