import * as React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./table.sass"

type InitData = {
  [key: string]: string
}

type TableProps = {
  headers: string[],
  initData: InitData[],
  keyField: string,
  showKeyField?: boolean
}

function Table({ headers, initData, keyField, showKeyField = false }: TableProps){
  const [activeRow, setActiveRow] = React.useState("")
  const [data, setData] = React.useState(initData)
  const [sortHeader, setSortHeader] = React.useState("")
  const [sortAsc, setSortAsc] = React.useState(true)

  return(
    <table className="table">
      <thead>
        <tr>
          {headers.map(header => {
            return (
              <th
                className="table-header"
                key={header} 
                onClick={() => {
                  if (sortHeader === header){
                    if(sortAsc){
                      let curArray = data
                      curArray.sort((a, b) => (a[header] > b[header]) ? -1 : 1);
                      setSortHeader(header)
                      setData(curArray)
                      setSortAsc(false)
                    }
                    else{
                      let curArray = data
                      curArray.sort((a, b) => (a[header] > b[header]) ? 1 : -1);
                      setSortHeader(header)
                      setData(curArray)
                      setSortAsc(true)
                    }
                  }
                  else{
                    let curArray = data
                    curArray.sort((a, b) => (a[header] > b[header]) ? 1 : -1);
                    setSortHeader(header)
                    setData(curArray)
                    setSortAsc(true)
                  }
                }}
              >
                {header}
                {sortHeader === header ? 
                  sortAsc ? 
                    <FaAngleDown className="table-header-sorticon"/> 
                    : <FaAngleUp className="table-header-sorticon"/>
                  : null
                }
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data.map(row => {
          return (
            <tr 
              key={row[keyField]} 
              onClick={() => activeRow === row[keyField] ? setActiveRow("") : setActiveRow(row[keyField])} 
              className={"table-row" + (activeRow === row[keyField] ? " active" : "")}
            >
              {Object.keys(row).map(key => {
                return (
                  showKeyField ? 
                    <td key={key} className="table-cell">{row[key]}</td>
                    : key === keyField ? 
                      null 
                      : <td key={key} className="table-cell">{row[key]}</td>
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

export { Table }