import { ConfigProvider } from 'antd'
import faIR from 'antd/locale/fa_IR.js'
import JalaliProvider from 'antd-jalali-v5'

export default function AntdProvider ({ children }) {
  return (
    <ConfigProvider
      direction='rtl'
      locale={faIR}
      theme={{ token: { fontFamily: 'vazir' } }}
    >
      <JalaliProvider />
      {children}
    </ConfigProvider>
  )
}
