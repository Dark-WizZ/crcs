import map from '../icons/map.png'
import pie from '../icons/pie.png'
import trend from '../icons/trend.png'
import dataTable from '../icons/table.png'

function Hero() {
  return ( <div className="hero">
    <div className="top">
      <div className="total">Total Rgeistered Societies</div>
      <div className="download">
        <div className="text">Download raw data: </div>
        <button>Get PDF</button>
      </div>
    </div>
    <section>
      <div className="map view_card">
        <img src={map} alt="map view" />
        <div className="text">MAP VIEW</div>
      </div>
      <div className="pie view_card">
        <img src={pie} alt="pie view" />
        <div className="text">SECTOR PROPORTION</div>
      </div>
      <div className="trend view_card">
        <img src={trend} alt="trend view" />
        <div className="text">REGISTRATION TRENDS</div>
      </div>
      <div className="data_table view_card">
        <img src={dataTable} alt="data table view" />
        <div className="text">DATA TABLE</div></div>
    </section>
  </div> );
}

export default Hero;