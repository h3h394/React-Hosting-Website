/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import SupportBg from "../../img/supportBg.webp";
import SupportInfo from "./SupportInfo";
import SupportContact from "./SupportContact";

const Support = () => (
  <section css={styles} className="support">
    <Container>
      <SupportInfo />
      <div className="contactContainer">
        <SupportContact
          supportIcon="fas fa-phone-volume"
          supportText="+1 514 648"
        />
        <SupportContact supportIcon="far fa-comment" supportText="Text Us" />
      </div>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 140px 0;
  background: url('${SupportBg}') no-repeat center/cover;
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    .contactContainer {
      width: 100%;
      max-width: 500px;
      display: flex;
      align-items: center;
    }
  }
  @media(max-width: 825px) {
    .container{
      flex-direction: column;
      align-items: center;
      .contactContainer{
        flex-wrap: wrap;
      }
    }
  }
  @media (min-width: 826px) and (max-width: 1190px) {
    .container{
      .contactContainer{
        max-width: 40%;
        flex-wrap: wrap;
      }
    }
  }
  @media (max-width: 1288px) {
    .container{
      max-width: 90%;
    }
  }
`;

export default Support;
