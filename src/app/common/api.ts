import axios from 'axios';

const clientId = 'd098b13bdd1daf7e8464';
const clientSecret = 'c2bd5a0cc944cc28e8d95d5399d1ffaf4627716b';
const apiUrl = 'https://api.github.com';
const usersUrl = `${apiUrl}/users`;
const params = `client_id=${clientId}&client_secret=${clientSecret}`;

function getProfile(username: string) {
  return axios.get(`${usersUrl}/${username}?${params}`)
    .then((user) => {
      return user.data;
    })
}

function getRepos(username: string) {
  return axios.get(`${usersUrl}/${username}/repos?${params}&per_page=100`);
}

function getStartCount(repos: any) {
  return repos.data.reduce((count: any, repo: any) => {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile: any, repos: any) {
  return (profile.followers * 3) + getStartCount(repos);
}

function getUserData(player: string) {
  return axios.all([getProfile(player), getRepos(player)])
    .then((data) => {
      return {
        profile: data[0],
        score: calculateScore(data[0], data[1])
      };
    })
}

function sortPlayers(players: any) {
  return players.sort((a: any, b: any) => {
    return b.score - a.score;
  });
}

function handleError(error: any) {
  console.warn(error);
  return null;
}

export const api = {

  fetchPopularRepos: (lang: string) => {

    const encodedURI = (window as any).encodeURI(apiUrl + '/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      });
  },

  battle: (players: Array<string>) => {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  }
};
