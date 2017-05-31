import React from 'react';

interface LanguageProps {
  language: string
  selectedLanguage: string,
  onSelect: Function
}

class Language extends React.Component<LanguageProps, undefined> {

  onSelect = () => {
    this.props.onSelect(this.props.language);
  };

  render() {

    const activeCls = this.props.language === this.props.selectedLanguage ? 'active' : '';

    return (
      <li className={activeCls}
          onClick={this.onSelect}>
        {this.props.language}
      </li>
    );
  }
}

interface SelectLanguageProps {
  selectedLanguage: string,
  onSelect: Function
}

export class SelectLanguage extends React.PureComponent<SelectLanguageProps, undefined> {

  render() {

    const languages = ['All', 'CSS', 'Go', 'Kotlin', 'Swift', 'Typescript'];

    return (
      <ul className="languages">
        {
          languages.map((lang) => {
            return <Language key={lang} language={lang}
                             selectedLanguage={this.props.selectedLanguage}
                             onSelect={this.props.onSelect}/>
          })
        }
      </ul>
    );
  }
}
