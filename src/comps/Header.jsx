import emp from '../icons/emb.png'
import logo from '../icons/mscs_icon.png'

function Header() {
  return ( <div className="header">
    <img src={emp} alt="emblem logo" />
    <div className="title">
      <h1>MULTI-STATE CO-OPERATIVE SOCIETIES</h1>
      <h4>Ministry of Cooperation. Govt. of India</h4>
    </div>
    <img src={logo} alt="mscs_logo" />
  </div> );
}

export default Header;