import { useState, useContext } from 'react'
import filterIcon from '../icons/filter.png'
import dummyData from '../data/dummyData'
import DataList from './DataList'
import { ShowContext } from '../context/ShowContext'



function Filters({data, setData}) {
  const {showFilter,setShowFilter, showItems, setShowItems} = useContext(ShowContext)

  const fltrClk = (e) => {
    if(showFilter){
      setShowFilter(false)
      setShowItems(false)
    }
    else {
      setShowFilter(true)
      setShowItems(true)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const state = e.target[1].value
    const district = e.target[2].value
    const sector = e.target[3].value
    if(!name&&!state&&!district&&!sector){
      setData(dummyData)
    }else{
      let newData = JSON.parse(JSON.stringify(dummyData))
      if (name) newData=newData.filter(r=>r.name.toLowerCase().includes(name.toLowerCase()))
      if (state) newData=newData.filter(r=>r.state.toLowerCase().includes(state.toLowerCase()))
      if (district) newData=newData.filter(r=>r.district && r.district.toLowerCase().includes(district.toLowerCase()))
      if (sector) newData=newData.filter(r=>r.sector && r.sector.toLowerCase().includes(sector.toLowerCase()))
      setData(newData)
    }
  }

  return ( <div className="filters">
  <img src={filterIcon} alt="filter" onClick={fltrClk}/>
  {showFilter && <div className="wrapper">
    <form onSubmit={submitHandler}>
      <div className="name_ip">
        <label htmlFor="name_ip">Name: </label>
        <input type="text" placeholder='Enter Socity Name' id='name_ip'/>
      </div>
      <div className="state_ip">
        <label htmlFor="state_ip">State: </label>
        <input type="text" placeholder='Enter State' id='state_ip'/>
      </div>
      <div className="district_ip">
        <label htmlFor="district_ip">District</label>
        <input type="text" placeholder='Enter District' id='district_ip'/>
      </div>
      <div className="sector_ip">
        <label htmlFor="sector_ip">Sector: </label>
        <input type="text" placeholder='Enter Sector' id='sector_ip'/>
      </div>
      {/* <div className="dor_ip">
        <div className="text">Date of Registration</div>
        <div className="from_ip">
          <label htmlFor="from_ip">From: </label>
          <input type="text" id='from_ip' placeholder='dd/mm/yyyy'/>
        </div>
        <div className="to_ip">
        <label htmlFor="to_ip">To: </label>
          <input type="text" id='from_ip' placeholder='dd/mm/yyyy' />
        </div>
      </div> */}
      <button type="submit">Search</button>
    </form>
  </div>}
  {showFilter && <DataList data={data}/>}
</div> );
}

export default Filters;