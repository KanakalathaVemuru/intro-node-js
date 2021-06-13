import './data';

getUserById = (id, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const user = App.users.find(user => user.id === id)
    cb(user)
  }, 150)
}

getPostsForUser = (userId, cb) => {
  // simulate API call
  window.setTimeout(() => {
    const posts = App.posts.find(post => post.createdBy === userId)
    cb(posts)
  }, 150)
}

module.exports = {getUserById, getPostsForUser};