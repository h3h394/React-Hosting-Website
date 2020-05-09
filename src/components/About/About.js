/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import AboutInfo from "./AboutInfo";
import AboutImg from "./AboutImg";

const About = () => (
  <section css={styles} className="about" id="about">
    <Container>
      <AboutInfo />
      <AboutImg />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 160px 0;
  .container {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 880px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 881px) and (max-width: 1215px) {
    .container {
      align-items: center;
    }
  }
`;

export default About;
