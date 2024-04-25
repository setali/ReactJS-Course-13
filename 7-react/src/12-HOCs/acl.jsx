import React from 'react'

export const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['ADD_POST', 'EDIT_POST', 'REMOVE_POST', 'VIEW_POST_LIST']
}

export function hasPermission (permission) {
  return user.permissions.includes(permission)
}
export default Component => props =>
  props.permission && !hasPermission(props.permission) ? null : (
    <Component {...props} />
  )

// export default function acl (Component) {
//   return class MyACL extends React.Component {
//     render () {
//       if (this.props.permission && !hasPermission(this.props.permission)) {
//         return null
//       }

//       return <Component {...this.props} />
//     }
//   }
// }
