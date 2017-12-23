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

export const setTeam = (teamId, data) => service.put(`/teams/${teamId}`, data);

export const setMemberAvatar = (id, data) => service.put(`/users/${id}/change/avatar`, data);

export const getAllTeamLogos = () => service.get('/imageGallerys?name=logoForTeams');

export const getAllMemberAvatars = () => service.get('/imageGallerys?name=avatarForMember');

export const getAllBattleThemes = () => service.get('/battleThemes');
