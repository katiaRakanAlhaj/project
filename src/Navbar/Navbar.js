import './Navbar.css';
import Union from '../images/Union.png';
const Navbar = () => {
  return (
    <div className="navabr">
      <div className="text-left">
        <img src={Union} />
        <p className="ebmed">embed</p>
      </div>
      <div className="text-right">
        <p>Home</p>
        <span>Earn</span>
        <p>Promote</p>
        <p>Join Waitlist</p>
      </div>
    </div>
  );
};
export default Navbar;
