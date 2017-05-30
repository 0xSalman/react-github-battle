import * as React from "react";
import {SelectLanguage} from "./SelectLanguage";

interface LanguageSate {
  selectedLanguage: string
}

export class Popular extends React.Component<any, LanguageSate> {

  constructor(props: any, context: LanguageSate) {
    super(props, context);
    this.state = {
      selectedLanguage: 'All'
    }
  }

  updateLanguage(lang: string) {
    this.setState({
      selectedLanguage: lang
    });
  }

  render() {

    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage}
                        onSelect={this.updateLanguage.bind(this)}/>
      </div>
    );
  }
}
