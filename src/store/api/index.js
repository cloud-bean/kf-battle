import config from '../config';
const axios = require('axios');

const service = axios.create({
  baseURL: config.server.bigServer, // api的base_url
  timeout: 5000, // 请求超时时间
});

export const getAllTeams = () => service.get('/teams');

export const getCardPool = () => service.get('/cards?category=课堂battle');

export const getRandomEvents = () => service.get('/randomEvents');

export const postBattleResult = (data) => service.post('/battles', data);
