import home from '../icons/home.png'
import dashboard from  '../icons/dashboard.png'
import form from '../icons/form.png'
import application from '../icons/application.png'
import report from '../icons/report.png'
import more from '../icons/more.png'

function Topbar() {

  return ( <div className="topbar">
    <div className="home">
      <img src={home} alt="home" />
      <div className="text">Home</div>
    </div>
    <div className="dashboard selected" onClick={()=>window.location='/crcs'}>
      <img src={dashboard} alt="dashboard" />
      <div className="text">Dashboard</div>
    </div>
    <div className="form">
      <img src={form} alt="form" />
      <div className="text">Forms</div>
    </div>
    <div className="application">
      <img src={application} alt="application" />
      <div className="text">Application</div>
    </div>
    <div className="reports">
      <img src={report} alt="reports" />
      <div className="text">Reports</div>
    </div>
    <div className="more">
      <img src={more} alt="more" />
      <div className="text">More</div>
    </div>
  </div> );
}

export default Topbar;