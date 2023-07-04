import './Main.css';
import threePerson from '../images/threePerson.png';
import button from '../images/button.png';
const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="main-text">
          <h1 className="main-title">Lead the change</h1>
          <p>
            In a decentralised world,<span> you power the brand</span>
            <br />. Influence the way brands will look in the metaverse
            <br />
            and <span>build a community</span> around those you love.
            <span>
              {' '}
              Be a part of the change and join Embed’s
              <br />
              decentralized protocol today
            </span>
          </p>
          <div className="Button">
            <img src={button} className="button" />
          </div>
        </div>
        <div>
          <img src={threePerson} className="threePerson" />
        </div>
      </div>
      <p className="main-paragraph">
        The trademarks, logos and brand names that appear on this website are
        used for informational or editorial purposes and are the property of
        their respective owners. Use of these
        <br />
        trademarks, logos and brand names does not imply any affiliation with or
        endorsement by their owners.
      </p>
    </div>
  );
};
export default Main;
