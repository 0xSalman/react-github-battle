import React from 'react';
import {SelectLanguage} from './SelectLanguage';
import {api} from '../common/api';
import {RepoGrid} from './RepoGrid';

interface LanguageSate {
  selectedLanguage: string,
  repos: Array<any> | null
}

export class Popular extends React.Component<any, LanguageSate> {

  constructor(props: any) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (lang: string) => {

    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    api.fetchPopularRepos(lang).then(repos => {
      this.setState({
        repos: repos
      })
    });
  };

  render() {

    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage}
                        onSelect={this.updateLanguage}/>
        {!this.state.repos
          ? <p>LOADING...</p>
          : <RepoGrid repos={this.state.repos}/>}
      </div>
    );
  }
}
