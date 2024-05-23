import {
  Form,
  Input,
  Button,
  Select as AntSelect,
  Checkbox as AntCheckbox,
  DatePicker as AntDatePicker
} from 'antd'
import { digitsArToEn, digitsFaToEn } from '@persian-tools/persian-tools'

function Text ({ label, name, required, len, min, max, isDigit, ...props }) {
  function normalize (value) {
    return digitsFaToEn(digitsArToEn(value)).replace(/\D/, '')
  }

  return (
    <Form.Item
      normalize={isDigit && normalize}
      label={label}
      name={name}
      rules={[{ required }, { len }, { min }, { max }]}
    >
      <Input {...props} maxLength={max || len} />
    </Form.Item>
  )
}

function Email ({ label, name, required, len, min, max, ...props }) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required }, { len }, { min }, { max }, { type: 'email' }]}
    >
      <Input {...props} maxLength={max || len} />
    </Form.Item>
  )
}

function Password ({ label, name, required, len, min, max, ...props }) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required }, { len }, { min }, { max }]}
    >
      <Input.Password {...props} maxLength={max || len} />
    </Form.Item>
  )
}

function Select ({ label, name, required, options = [], ...props }) {
  return (
    <Form.Item name={name} label={label} rules={[{ required: true }]}>
      <AntSelect {...props}>
        {options.map(({ value, label }) => (
          <AntSelect.Option key={value} value={value}>
            {label}
          </AntSelect.Option>
        ))}
      </AntSelect>
    </Form.Item>
  )
}

function Checkbox ({ label, name, ...props }) {
  return (
    <Form.Item name={name} valuePropName='checked'>
      <AntCheckbox {...props}>{label}</AntCheckbox>
    </Form.Item>
  )
}

function DatePicker ({ label, name, required, ...props }) {
  return (
    <Form.Item label={label} name={name} rules={[{ required }]}>
      <AntDatePicker {...props} />
    </Form.Item>
  )
}

function Submit ({ label = 'ثبت', ...props }) {
  return (
    <Form.Item>
      <Button type='primary' htmlType='submit' {...props}>
        {label}
      </Button>
    </Form.Item>
  )
}

export default Object.assign(Form, {
  Text,
  Email,
  Password,
  Select,
  Checkbox,
  DatePicker,
  Submit
})
