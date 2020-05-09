/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Button from "../GlobalComponents/Button";

const DomainInfo = () => (
  <div css={styles} className="domainInfo">
    <div className="domainDesc">
      <Title text="Get your domain" />
      <h2>Search domain you want</h2>
    </div>
    <div className="domainSearch">
      <input type="text" placeholder="Search your domain name here" />
      <div className="extension">
        <p>.com</p>
      </div>
      <Button btnText="SEARCH NOW" />
    </div>
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .domainDesc {
    width: 100%;
    max-width: 300px;
    h2 {
      color: #fff;
      font-size: 35px;
      margin: 20px 0 0 0;
      line-height: 1.4;
    }
  }
  .domainSearch {
    width: 100%;
    max-width: 740px;
    height: 60px;
    display: flex;
    margin-bottom: 10px;
    input {
      width: 60%;
      height: 100%;
      padding: 0 20px;
      border: none;
      outline: none;
      border-radius: 50px 0 0 50px;
      color: #777;
      &::placeholder {
        color: #777;
      }
    }
    .extension {
      width: 20%;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      border-radius: 0 50px 50px 0;
      height: 100%;
      padding: 0 14px;
    }
  }
  @media (max-width: 711px) {
    .domainSearch {
      flex-wrap: wrap;
      input {
        width: 100%;
        border-radius: 4px;
      }
      .extension {
        display: none;
      }
      button {
        width: 100%;
        font-size: 12px;
        border-radius: 4px;
        margin: 20px 0;
      }
    }
  }
  @media (max-width: 935px) {
    flex-direction: column;
    align-items: flex-start;
    .domainDesc {
      padding-bottom: 30px;
      h2 {
        font-size: 25px;
      }
    }
  }
  @media (min-width: 936px) and (max-width: 1045px) {
    .domainSearch {
      max-width: 60%;
      input {
        width: 50%;
      }
    }
  }
`;

export default DomainInfo;
