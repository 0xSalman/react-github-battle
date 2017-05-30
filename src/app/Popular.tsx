import * as React from "react";
import {SelectLanguage} from "./SelectLanguage";
import {api} from "./common/api";
import {RepoGrid} from "./RepoGrid";

interface LanguageSate {
  selectedLanguage: string,
  repos: Array<any> | null
}

export class Popular extends React.Component<any, LanguageSate> {

  constructor(props: any, context: LanguageSate) {
    super(props, context);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang: string) {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    api.fetchPopularRepos(lang).then(repos => {
      this.setState({
        repos: repos
      })
    });
  }

  render() {

    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage}
                        onSelect={this.updateLanguage.bind(this)}/>
        {!this.state.repos
          ? <p>LOADING...</p>
          : <RepoGrid repos={this.state.repos}/>}
      </div>
    );
  }
}
