import './sectionThree.css';
import Vector from '../images/Vector.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const SectionThree = () => {
  return (
    <div className="section-three">
      <h1>The Embed-to-Earn Model</h1>
      <div className="flex">
        <div className="box">
          <h1>#1 Match</h1>
          <p>
            Join Embed and
            <br />
            match with your
            <br />
            favourite brands
          </p>
        </div>
        <IconContext.Provider value={{ size: 70 }}>
          <AiOutlineArrowRight className="arrow" />
        </IconContext.Provider>

        <div className="box">
          <h1>#2 Influence</h1>
          <p>
            Impact your
            <br />
            favorite brand and
            <br />
            build a community around it
          </p>
        </div>
        <IconContext.Provider value={{ size: 70 }}>
          <AiOutlineArrowRight className="arrow" />
        </IconContext.Provider>
        <div className="box">
          <h1>#3 Earn</h1>
          <p>
            Grow you
            <br />
            audience and earn
            <br />
            rewards{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
