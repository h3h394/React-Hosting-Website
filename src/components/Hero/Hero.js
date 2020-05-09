/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Nav from "./Nav";
import Container from "../GlobalComponents/Container";
import HeroInfo from "./HeroInfo";
import HeroImg from "./HeroImg";
import HeroSocials from "./HeroSocials";

const Hero = () => (
  <section css={styles} className="hero" id='home'>
    <HeroSocials />
    <Nav />
    <Container>
      <HeroInfo />
      <HeroImg />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: #020230;
  display: flex;
  position: relative;
  .container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 941px) and (max-width: 1245px) {
    .container {
      max-width: 870px;
    }
  }
`;

export default Hero;
