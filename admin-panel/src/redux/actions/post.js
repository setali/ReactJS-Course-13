import request from '@/tools/request'

export function setPosts (payload) {
  return { type: 'POSTS', payload }
}

export function setPost (payload) {
  return { type: 'POST', payload }
}

export function getPosts () {
  return (dispatch, getState) => {
    if (getState().posts.length === 0)
      request('/posts').then(({ data }) => dispatch(setPosts(data)))
  }
}

export function getPost (id) {
  return dispatch => {
    request(`/posts/${id}`).then(({ data }) => dispatch(setPost(data)))
  }
}
