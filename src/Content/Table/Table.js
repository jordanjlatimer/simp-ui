import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./table.sass"
import PropTypes from "prop-types"

function Table(props){
  const [activeRow, setActiveRow] = useState(null)
  const [data, setData] = useState(props.data)
  const [sort, setSort] = useState({key: null, dir: null})

  return(
    <table className="table">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => {
            return (
              <th
                className="table-header"
                key={key} 
                onClick={() => {
                  if (sort.key === key){
                    if(sort.dir === "asc"){
                      let headerRow = data[0]
                      let curArray = data.slice(1);
                      curArray.sort((a, b) => (a[key] > b[key]) ? -1 : 1);
                      curArray.unshift(headerRow)
                      setSort({key: key, dir: "desc"})
                      setData(curArray)
                    }
                    else{
                      let headerRow = data[0]
                      let curArray = data.slice(1);
                      curArray.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
                      curArray.unshift(headerRow)
                      setSort({key: key, dir: "asc"})
                      setData(curArray)
                    }
                  }
                  else{
                    let headerRow = data[0]
                    let curArray = data.slice(1);
                    curArray.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
                    curArray.unshift(headerRow)
                    setSort({key: key, dir: "asc"})
                    setData(curArray)
                  }
                }}
              >
                {data[0][key]}
                {sort.key === key ? (sort.dir === "asc" ? <FaAngleDown className="table-header-sorticon"/> : <FaAngleUp className="table-header-sorticon"/>) : null}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map(row => {
          return (
            <tr key={row["id"]} onClick={() => activeRow === row["id"] ? setActiveRow(null) : setActiveRow(row["id"])} className={activeRow === row["id"] ? "table-row active" : "table-row"}>
              {Object.keys(row).map(key => {
                return (
                  props.showId ? (
                    <td key={key} className="table-cell">
                      {row[key]}
                    </td>
                  ) : (
                    key === "id" ? null : (
                      <td key={key} className="table-cell">
                        {row[key]}
                      </td>
                    )
                  )
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Table.displayName = "Table";

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  showId: PropTypes.bool
}

export default Table