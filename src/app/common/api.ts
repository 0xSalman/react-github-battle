import axios from 'axios';

export const api = {

  fetchPopularRepos: (lang: string): Promise<Array<any>> => {

    var encodedURI = (window as any).encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      });
  }
};
