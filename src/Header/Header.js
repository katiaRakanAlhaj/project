import './Header.css';
import Group from '../images/Group.png';
import button from '../images/button.png';
const Header = () => {
  return (
    <div className="header">
      <div className="group">
        <img src={Group} className="centered-image" />
        <div className="parahraph">
          <p>
            {' '}
            Embed empowers you to
            <br />
            monetize your portfolio
          </p>
        </div>
        <div className="Line"></div>
        <p className="text">
          We enable NFT holders to become influencers, build their audience
          through a turn-key
          <br />
          solution developed to monetize and transform their portfolio into a
          yielding
          <br />
          asset. We create passion-based communities.
        </p>
        <div className="header-button">
          <div>
            <img src={button} className="button" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
