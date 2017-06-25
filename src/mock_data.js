const faker = require('faker');

function getUsers() {

}

function genRandomUsers(N = 50) {
  const users = [];
  if (N > 0) {
    for (let i = 0; i < N; i++) {
      users.push({
        id: i,
        name: faker.name.findName(),
        createdAt: faker.date.past(),
      })
    }
  }
  return users;
}

module.exports = {
  'GET /users': genRandomUsers(4),
  'GET /version': 'V1.0.0',
  'GET /list': [1, 2, 3]
}