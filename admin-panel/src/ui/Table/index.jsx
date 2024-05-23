import { useMemo } from 'react'
import { Table as AntTable } from 'antd'

export default function Table ({ data, columns, rowKey = 'id', ...props }) {
  const newColumns = useMemo(() => {
    return columns.map(c => ({ dataIndex: c.key, ...c }))
  }, [columns])

  return (
    <AntTable
      dataSource={data}
      columns={newColumns}
      rowKey={rowKey}
      {...props}
    />
  )
}
