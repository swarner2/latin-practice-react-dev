export function checkUser(username, password) {
  var userKeys = {
    test : 'password',
  }
  if (userKeys[username] === password) {
    return true
  }
  else {
    return false
  }
}
