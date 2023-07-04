import './Footer.css';
import Group from '../images/Group.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import telegram from '../images/telegram.png';
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="flex">
          <img src={Group} className="group" />
          <h1>embed</h1>
        </div>
        <p>© Embed 2022</p>
      </div>
      <div>
        <p>
          Embed protocol is a marketing community engine solution
          <br />
          for brands and NFT holders that discovers, tokenizes, and
          <br />
          activates communities in the metaverse and web3
        </p>
        <div className="icons">
          <img src={linkedin} />
          <img src={telegram} />
          <img src={twitter} className="twitter" />
        </div>
        <div className="words">
          <p>legal</p>

          <p>Privay</p>

          <p>careers</p>

          <p>contact</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
