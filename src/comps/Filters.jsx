import { useState, useContext } from 'react'
import searchIcon from '../icons/search_b.png'
import filterIcon from '../icons/filter.png'
import dummyData from '../data/dummyData'
import DataList from './DataList'
import { ShowContext } from '../context/ShowContext'



function Filters() {
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
      <div className="dor_ip">
        <div className="text">Date of Registration</div>
        <div className="from_ip">
          <label htmlFor="from_ip">From: </label>
          <input type="text" id='from_ip' placeholder='dd/mm/yyyy'/>
        </div>
        <div className="to_ip">
        <label htmlFor="to_ip">To: </label>
          <input type="text" id='from_ip' placeholder='dd/mm/yyyy' />
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
  </div>}
  <DataList />
</div> );
}

export default Filters;