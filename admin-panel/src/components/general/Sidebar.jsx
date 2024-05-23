import { Link } from 'react-router-dom'
import {
  DashboardOutlined,
  UserOutlined,
  EditOutlined
} from '@ant-design/icons'
import { Layout, Menu } from '@/ui'

const { Sider } = Layout

const items = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: <Link to='/'>داشبورد</Link>
  },
  {
    key: 'people',
    label: 'کاربران',
    icon: <UserOutlined />,
    children: [
      {
        key: 'people-5',
        label: <Link to='/people'>لیست کاربران</Link>
      },
      {
        key: 'people-6',
        label: <Link to='/people/add'>افزودن کاربر</Link>
      }
    ]
  },
  {
    key: 'posts',
    label: 'مقالات',
    icon: <EditOutlined />,
    children: [
      {
        key: 'posts-5',
        label: <Link to='/posts'>لیست مقالات</Link>
      },
      {
        key: 'posts-6',
        label: 'افزودن مقاله'
      }
    ]
  }
]

export default function Sidebar () {
  return (
    <Sider width='18%' collapsible theme='light'>
      <Menu
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['people', 'posts']}
        mode='inline'
        items={items}
      />
    </Sider>
  )
}
