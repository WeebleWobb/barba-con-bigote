import React from 'react'

interface TableColumn {
  header: string
  key: string
  className?: string
}

interface TableProps {
  columns: TableColumn[]
  data: Record<string, string>[]
  className?: string
}

const Table: React.FC<TableProps> = ({ columns, data, className = "" }) => {
  return (
    <div className={`shadow-lg ${className}`}>
      <table className="bg-cerveza-crema min-w-full rounded-lg">
        <thead>
          <tr className="border-b">
            {columns.map((column) => (
              <th key={column.key} className={`text-left py-2 px-4 ${column.className}`}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b last:border-b-0">
              {columns.map((column) => (
                <td key={column.key} className={`py-2 px-4 ${column.className}`}>
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
