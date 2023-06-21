import { useRef, useState } from "react";
import dummyData from "../data/dummyData";
import DataTable from 'react-data-table-component'


const expanded_comp = ({data : detail}) =>{
  return <div className='detail'>
    {detail.name && <div className="name"><b>{detail.name}</b></div>}
    {detail.address && <div className="address"><b>Address: </b>{detail.address}</div>}
    {detail.state && <div className="state"><b>State: </b>{detail.state}</div>}
    {detail.district && <div className="district"><b>District: </b>{detail.district}</div>}
    {detail.registrationDate && <div className="dor"><b>Date of Registration: </b>{detail.registrationDate}</div>}
    {detail.areaOfOp && <div className="aoo"><b>Area of Operation: </b>{detail.areaOfOp}</div>}
    {detail.sector && <div className="sector"><b>Sector: </b>{detail.sector}</div>}
  </div>
}

const customStyles = {
  headCells: {
    style:{
      color:'black',
      fontWeight:'600',
      fontSize: '1.1rem',
    }
  },
  rows:{
    style:{
      borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
      fontSize: '0.8rem',
    }
  },
  expanderRow:{
    style:{
      padding: '1rem 3rem',
      border: '1px solid rgba(0, 0, 0, 0.125)',
      borderRadius:'5px',
    }
  }
}

function TableView() {

  const [data, setData] = useState(dummyData)
  const formRef = useRef()

  const column = [
    // {
    //   name: 'S.NO',
    //   selector: row => row.sno,
    //   sortable:true
    // },
    {
      name: 'Name of Society',
      selector: row => row.name,
      sortable:true
    },
    // {
    //   name: 'Address',
    //   selector: row => row.address,
    //   sortable:true
    // },
    {
      name: 'District',
      selector: row => row.district || '---',
      sortable:true
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable:true
    },
    // {
    //   name: 'Date of Registration',
    //   selector: row => row.registrationDate,
    //   sortable:true
    // },
    // {
    //   name: 'Area of Operation',
    //   selector: row => row.areaOfOp,
    //   sortable:true
    // },
    {
      name: 'Sector type',
      selector: row => row.sector,
      sortable:true
    }
  ]


  const handleFilter = () => {
    console.log(formRef)

    const name = formRef.current[0].value
    const district = formRef.current[1].value
    const state = formRef.current[2].value
    const sector = formRef.current[3].value
    if(!name&&!state&&!district&&!sector){
      setData(dummyData)
    }else{
      let newData = JSON.parse(JSON.stringify(dummyData))
      if (name) newData=newData.filter(r=>r.name.toLowerCase().includes(name.toLowerCase()))
      if (district) newData=newData.filter(r=>r.district && r.district.toLowerCase().includes(district.toLowerCase()))
      if (state) newData=newData.filter(r=>r.state.toLowerCase().includes(state.toLowerCase()))
      if (sector) newData=newData.filter(r=>r.sector && r.sector.toLowerCase().includes(sector.toLowerCase()))
      setData(newData)
    }
  }

  return ( <div className="table_view">
    <div className="title">Data Table</div>
    <div className="table_container">
    <form ref={formRef}>
      <div className="name_ip">
        <input type="text" placeholder='Name of Society' id='name_ip' onChange={handleFilter}/>
      </div>
      <div className="district_ip">
        <input type="text" placeholder='District' id='district_ip'onChange={handleFilter}/>
      </div>
      <div className="state_ip">
        <input type="text" placeholder='State' id='state_ip'onChange={handleFilter}/>
      </div>
      <div className="sector_ip">
        <input type="text" placeholder='Sector' id='sector_ip'onChange={handleFilter}/>
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
      {/* <button type="submit">Search</button> */}
    </form>
      <DataTable columns={column} data={data} customStyles={customStyles}
      pagination expandableRows expandableRowsComponent={expanded_comp}
      ></DataTable>
    </div>
  </div> );
}

export default TableView;