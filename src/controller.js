const router = require('koa-router')();
const mockData = require('./mock_data');

for (let [key, value] of Object.entries(mockData)) {
  const [method, path] = key.split(/\s+/);
  if (method.toUpperCase() === 'GET') {
    router.get(path, async (ctx) => {
      ctx.response.body = value;
    })
  } else if (method.toUpperCase() === 'POST') {
    router.post(path, async (ctx) => {
      ctx.response.body = value;
    })
  } else {
    ctx.response.body = 'error:method not allowed';
  }
}

module.exports = router.routes()