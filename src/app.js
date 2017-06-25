const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const config = require('./config');
const faker = require('faker');
const controller = require('./controller');

router.get('/', async (ctx, next) => {
  ctx.response.body = 'hello';
  console.log(ctx.response);
});

// router.get('/users', async (ctx, next) => {
//   let users = genRandomUsers(3);
//   ctx.response.body = users;

// })

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

// app.use(router.routes());
app.use(controller);
app.listen(config.port);
console.log(`running at port ${config.port}`);