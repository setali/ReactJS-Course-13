import { useState } from 'react'
import { Divider, Form } from '@/ui'
import request from '@/tools/request'
import { useNavigate } from 'react-router-dom'
import { GENDERS } from '@/tools/constants'

const { Email, Password, Text, Select, Checkbox, Submit, DatePicker } = Form

export default function Add () {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  function onFinish (values) {
    setLoading(true)
    request
      .post('/users', { data: values })
      .then(() => navigate('/people'))
      .finally(() => setLoading(false))
  }

  return (
    <div>
      <h2>افزودن کاربر جدید</h2>
      <Divider />
      <Form onFinish={onFinish}>
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
