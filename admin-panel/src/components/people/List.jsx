import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EditOutlined, EyeOutlined } from '@ant-design/icons'
import request from '@/tools/request'
import { Table } from '@/ui'
import Remove from './Remove'

export default function List () {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)

  function getData () {
    setLoading(true)
    request('/users')
      .then(({ data }) => setPeople(data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getData()
  }, [])

  const columns = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    {
      title: 'Address',
      key: 'address',
      render: (f, r) => `${f.city} ${f.street} ${r.phone}`
    },
    {
      key: 'action',
      render: (_, r) => (
        <>
          <Link to={`/people/${r.id}`}>
            <EyeOutlined />
          </Link>
          <Link to={`/people/${r.id}/edit`}>
            <EditOutlined style={{ margin: '0 10px' }} />
          </Link>
          <Remove id={r.id} getData={getData} />
        </>
      )
    }
  ]

  return <Table data={people} columns={columns} loading={loading} />
}
