import { ShowContext } from "../context/ShowContext";
import dummyData from "../data/dummyData";
import {useContext, useState} from 'react'
import Item from './Item'

function DataList({data}) {

  const {showDetails, setShowDetails,showItem, setShowItem} = useContext(ShowContext)
  return ( <div className="data_list">
    <div className="wrapper">
      {data.map((obj, ind)=>{
        return (showItem && <Item obj={obj}/>)
      })}
    </div>
  </div> );
}

export default DataList;