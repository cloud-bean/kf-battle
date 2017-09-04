export default {
  server: {
    midServer: 'http://joywill.cc',
    bigServer: 'http://120.25.227.156:7000/api/base',
  },
  route: {
    auth: '/admin',
    weixin: 'https://open.weixin.qq.com/connect/oauth2/authorize',
    testRedirect: 'http://localhost:8080?code=123',
  },
  secret: {
    accessToken: 'b8a94cfea5924d9650d4a72e8b10137f8a609c87d477f11ebe04b006ba427672',
    userid: '581c96e5a5c363bc28af1a69',
  },
  task: {
    limit: 30,
  },
  rank: {
    limit: 20,
  },
};
