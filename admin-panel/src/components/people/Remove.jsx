import { removePerson } from '@/redux/actions/person'
import request from '@/tools/request'
import { Popconfirm, message } from '@/ui'
import { DeleteOutlined, LoadingOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Remove ({ id }) {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  function confirm () {
    setLoading(true)
    request
      .delete(`/users/${id}`)
      .then(() => {
        message.success('کاربر با موفقیت حذف شد.')
        dispatch(removePerson(id))
      })
      .finally(() => setLoading(false))
  }

  return (
    <Popconfirm description='آیا کاربر حذف شود؟' onConfirm={confirm}>
      {loading ? <LoadingOutlined /> : <DeleteOutlined />}
    </Popconfirm>
  )
}
