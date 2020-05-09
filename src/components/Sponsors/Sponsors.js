/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import SponsorsInfo from "./SponsorsInfo";
import SponsorLogo from "./SponsorLogo";
import SponsorOneLogo from "../../img/sponsorOne.webp";
import SponsorTwoLogo from "../../img/sponsorTwo.webp";
import SponsorThreeLogo from "../../img/sponsorThree.webp";
import SponsorFourLogo from "../../img/sponsorFour.webp";
import SponsorFiveLogo from "../../img/sponsorFive.webp";
import SponsorSixLogo from "../../img/sponsorSix.webp";

const Sponsors = () => (
  <section css={styles} className="sponsors">
    <Container>
      <SponsorsInfo />
      <div className="logoContainer">
        <SponsorLogo sponsorImg={SponsorOneLogo} />
        <SponsorLogo sponsorImg={SponsorTwoLogo} />
        <SponsorLogo sponsorImg={SponsorThreeLogo} />
        <SponsorLogo sponsorImg={SponsorFourLogo} />
        <SponsorLogo sponsorImg={SponsorFiveLogo} />
        <SponsorLogo sponsorImg={SponsorSixLogo} />
      </div>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  .container {
    display: flex;
    justify-content: space-between;
    .logoContainer {
      width: 100%;
      max-width: 600px;
    }
  }
  @media (max-width: 626px) {
    .container {
      .logoContainer {
        img {
          width: 45%;
          height: auto;
        }
      }
    }
  }
  @media (min-width: 627px) and (max-width: 980px) {
    .container {
      .logoContainer {
        img {
          width: 30%;
          height: auto;
        }
      }
    }
  }
  @media (max-width: 980px) {
    .container {
      flex-direction: column;
      align-items: center;
      .logoContainer {
        padding: 30px 0 0 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
`;

export default Sponsors;
