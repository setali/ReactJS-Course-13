import { useNavigate, useParams } from 'react-router-dom'
import { Divider, Form, Spin } from '@/ui'
import request from '@/tools/request'
import { GENDERS } from '@/tools/constants'
import usePerson from '@/hooks/usePerson'

const { Email, Password, Text, Select, Checkbox, Submit, DatePicker } = Form

export default function Edit () {
  const { id } = useParams()
  const navigate = useNavigate()

  const { person, loading } = usePerson(id)

  function onFinish (values) {
    request
      .put(`/users/${id}`, { data: values })
      .then(() => navigate(`/people/${id}`))
  }

  if (loading) {
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
        <Submit />
      </Form>
    </div>
  )
}
