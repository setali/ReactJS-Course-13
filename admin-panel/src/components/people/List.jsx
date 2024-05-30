import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { EditOutlined, EyeOutlined } from '@ant-design/icons'
import request from '@/tools/request'
import { Divider, Table } from '@/ui'
import Remove from './Remove'
import { connect } from 'react-redux'
import { setPeople, setPeopleLoading } from '@/redux/actions/person'

function List ({ setItems, people, loading, setLoading, person }) {
  function getData () {
    setLoading(true)
    request('/users')
      .then(({ data }) => setItems(data))
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
          <Remove id={r.id} />
        </>
      )
    }
  ]

  return (
    <div>
      {person.id && (
        <div>
          آخرین کاربر بازدید شده:
          {person.name}
          <Divider />
        </div>
      )}
      <Table data={people} columns={columns} loading={loading} />
    </div>
  )
}

const mapStateToProps = state => ({
  people: state.people,
  loading: state.peopleLoading,
  person: state.person
})

const mapDispatchToProps = dispatch => ({
  setItems: data => dispatch(setPeople(data)),
  setLoading: loading => dispatch(setPeopleLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
