/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import TestimonialBg from "../../img/testimonialBg.webp";

const TestimonialsImg = () => (
  <img css={styles} src={TestimonialBg} alt="testimonial" />
);

const styles = css`
  width: 100%;
  max-width: 500px;
  height: 500px;
  display: block;
  @media (max-width: 790px) {
    margin: 40px 0 0 0;
  }
  @media (min-width: 791px) and (max-width: 1010px) {
    max-width: 40%;
    height: 340px;
  }
`;

export default TestimonialsImg;
