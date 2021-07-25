module.exports = {
  dev: {
    BASE_URL: 'www.dev.com',
    ROLE: JSON.stringify(process.env.ROLE),
  },
  prod: {
    BASE_URL: 'www.prod.com',
    ROLE: JSON.stringify(process.env.ROLE),
  },
  test: {
    BASE_URL: 'www.test.com',
    ROLE: JSON.stringify(process.env.ROLE),
    NODE_ENV: JSON.stringify('test'),
  },
};
