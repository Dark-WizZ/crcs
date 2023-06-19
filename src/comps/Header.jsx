import emp from '../icons/emb.png'
import logo from '../icons/mscs_icon.png'

function Header() {
  return ( <div className="header">
    <img id='em_logo'src={emp} alt="emblem logo" />
    <div className="title">
      <h1 className='big'>MULTI-STATE CO-OPERATIVE SOCIETIES</h1>
      <h4 className='sub'>Ministry of Cooperation. Govt. of India</h4>
    </div>
    <img src={logo} alt="mscs_logo" id='logo'/>
  </div> );
}

export default Header;