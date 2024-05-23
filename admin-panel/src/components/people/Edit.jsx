import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Divider, Form, Spin } from '@/ui'
import request from '@/tools/request'
import { GENDERS } from '@/tools/constants'

const { Email, Password, Text, Select, Checkbox, Submit, DatePicker } = Form

export default function Edit () {
  const { id } = useParams()
  const [person, setPerson] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => setPerson(data))
  }, [id])

  function onFinish (values) {
    setLoading(true)
    request
      .put(`/users/${id}`, { data: values })
      .then(() => navigate(`/people/${id}`))
      .finally(() => setLoading(false))
  }

  if (!person.id) {
    return <Spin fullscreen />
  }

  return (
    <div>
      <h2>ویرایش کاربر {person.name}</h2>
      <Divider />
      <Form onFinish={onFinish} initialValues={person}>
        <Text label='نام کاربری' name='username' required min={3} max={10} />
        <Text label='شماره تلفن' isDigit name='phone' required len={11} />
        <Email label='ایمیل' name='email' required />
        <DatePicker label='تاریخ تولد' name='birthDate' required />
        <Text label='کدپستی' name='postalCode' required len={10} isDigit />
        <Password label='رمزعبور' name='password' required />
        <Select name='gender' label='جنسیت' required options={GENDERS} />
        <Checkbox name='admin' label='مدیر' />
        <Submit disabled={loading} loading={loading} />
      </Form>
    </div>
  )
}
