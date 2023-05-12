import React from 'react'
import "./table.scss"

export default function Table({children, columnTitles}) {
 
  return (
    <div className="scroll-table">
        <div className="scroll-table-body">
            <table>
                <thead>
                  <tr>
                    {columnTitles.map(columnTitle => (
                    <th key={columnTitle}>
                      {columnTitle}
                    </th>))}
                  </tr>
                </thead>
                <tbody>
                  {children}
                </tbody>
            </table>
        </div>	
    </div>
  )
}

