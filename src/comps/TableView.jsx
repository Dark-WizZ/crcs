import { useEffect, useState } from "react";
import dummyData from "../data/dummyData";
import DataTable from 'react-data-table-component'

function TableView() {

  const column = [
    {
      name: 'S.NO',
      selector: row => row.sno,
      sortable:true
    },
    {
      name: 'Name of Society',
      selector: row => row.name,
      sortable:true
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable:true
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable:true
    },
    {
      name: 'District',
      selector: row => row.district,
      sortable:true
    },
    {
      name: 'Date of Registration',
      selector: row => row.registrationDate,
      sortable:true
    },
    {
      name: 'Area of Operation',
      selector: row => row.areaOfOp,
      sortable:true
    },
    {
      name: 'Sector type',
      selector: row => row.sector,
      sortable:true
    }
  ]

  const [data, setData] = useState(dummyData)

  const handleFilter = (e) => {
    const newData = dummyData.filter(r=>r.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setData(newData)
  }

  return ( <div className="table_view">
    <div className="wrapper">
      <div>
        <input type="text"placeholder="search..." onChange={handleFilter}/>
      </div>
      <DataTable columns={column} data={data} title={'DATA TABLE'}
      pagination
      ></DataTable>
    </div>
  </div> );
}

export default TableView;