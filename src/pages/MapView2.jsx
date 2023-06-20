import {useState, useEffect} from 'react'
import {ComposableMap, Geographies, Geography, Annotation,
  ZoomableGroup, Sphere, Graticule} from 'react-simple-maps'
import {scaleLinear} from 'd3-scale'
import data from '../data/stateWiseReg'
import indiaMap from '../data/india.json'

const topoIndia = '../data/indian.json'
// const topoIndia = 'https://raw.githubusercontent.com/amurto/react-india-region-selector/master/src/topojsons/india.json'

const colorScale = scaleLinear().domain([0,30]).range(['#a72bb5','#0376db'])

function MapView() {
  const [states, setState] = useState(data)
  const [position, setPosition] = useState({coords: [0,0], zoom: 1})

  const handleMoveEnd = (position) => {
    setPosition(position)
  }

  return ( <div className="map_view">
    <div className="map_container">
    <div className="title">Geographic Overview</div>
    <ComposableMap  data-tip="" projection="geoMercator" width={150} height={150} projectionConfig={{ scale: 220 }}>
          <ZoomableGroup zoom={1} center={[80,22]}>
            <Geographies geography={indiaMap}>
              {({ geographies }) =>
                geographies.map(geo => {
                  // const obj = states.find((s)=> s.state.toLowerCase() == geo.properties.ST_NM.toLowerCase())
                  const obj = Object.keys(data).find(s => s.toLowerCase() == geo.properties.ST_NM.toLowerCase())
                  if (obj) console.log(obj)
                  return <Geography  
                    key={geo.rsmKey}
                    geography={geo}
                    fill={obj? colorScale(data[obj]):'gray'}

                    // style={{
                    //   default: {
                    //     fill: "#D6D6DA",
                    //     outline: "none"
                    //   },
                    //   hover: {
                    //     fill: "forestgreen",
                    //     outline: "none"
                    //   },
                    //   pressed: {
                    //     fill: "#2E8B57",
                    //     outline: "none"
                    //   }
                    // }}
                  />
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
    </div>
  </div> );
}

export default MapView;

{/* <ComposableMap 
        width={500}
        height={500}
        projectionConfig={{
          rotate:[-10, 0 , 0],
          scale:147,
        }}
      >
        <ZoomableGroup
          zoom= {position.zoom}
          center= {position.coords}
          onMoveEnd={handleMoveEnd}
        >
          <Sphere stroke='#000' strokeWidth={0.3}/>
          <Graticule stroke='#000' strokeWidth={0.3}/>
          <Geographies Geography={topoIndia}>
            {({geographies}) => 
              geographies.map((geo, ind) => {
                <Geography key={ind} geography={geo}
                  fill='#333'
                >

                </Geography>
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap> */}