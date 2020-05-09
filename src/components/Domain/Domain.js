/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import DomainBg from "../../img/domainBg.webp";
import Container from "../GlobalComponents/Container";
import DomainInfo from "./DomainInfo";
import DomainPrice from "./DomainPrice";

const Domain = () => (
  <section css={styles} className="domain">
    <Container>
      <DomainInfo />
      <div className="domainContainer">
        <DomainPrice color="#ff7474" domain=".com" price="$3.99/Year" />
        <DomainPrice color="#ffdd74" domain=".net" price="$2.99/Year" />
        <DomainPrice color="#74ff9f" domain=".com" price="$3.99/Year" />
        <DomainPrice color="#748bff" domain=".co" price="$5.99/Year" />
        <DomainPrice color="#f074ff" domain=".org" price="$2.99/Year" />
        <DomainPrice color="#f074ff" domain=".live" price="$1.99/Year" />
      </div>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 140px 0;
  background: url('${DomainBg}') no-repeat center/cover;
  .domainContainer {
    width: 100%;
    margin: 70px 0 0 0;
    border: 1px solid #032a57;
    display: flex;
    border-radius: 14px;
  }
  @media (max-width: 711px) {
    .domainContainer{
      margin: 90px 0 0 0;
      flex-wrap: wrap;
    }
  }
  @media (min-width: 711px) and (max-width: 1200px) {
    .domainContainer{
      flex-wrap: wrap;
    }
  }
`;

export default Domain;
