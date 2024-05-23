import request from '@/tools/request'
import { Popconfirm, message } from '@/ui'
import { DeleteOutlined, LoadingOutlined } from '@ant-design/icons'
import { useState } from 'react'

export default function Remove ({ id, getData }) {
  const [loading, setLoading] = useState(false)

  function confirm () {
    setLoading(true)
    request
      .delete(`/users/${id}`)
      .then(() => {
        message.success('کاربر با موفقیت حذف شد.')
        getData()
      })
      .finally(() => setLoading(false))
  }

  return (
    <Popconfirm description='آیا کاربر حذف شود؟' onConfirm={confirm}>
      {loading ? <LoadingOutlined /> : <DeleteOutlined />}
    </Popconfirm>
  )
}
