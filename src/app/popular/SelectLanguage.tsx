import * as React from 'react';

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

    const {language, selectedLanguage} = this.props;
    const activeCls = language === selectedLanguage ? 'active' : '';

    return (
      <li className={activeCls}
          onClick={this.onSelect}>
        {language}
      </li>
    );
  }
}

interface SelectLanguageProps {
  selectedLanguage: string,
  onSelect: Function
}

export function SelectLanguage(props: SelectLanguageProps) {

  const languages = ['All', 'CSS', 'Go', 'Kotlin', 'Swift', 'Typescript'];

  return (
    <ul className="languages">
      {
        languages.map((lang) => {
          return <Language key={lang} language={lang}
                           selectedLanguage={props.selectedLanguage}
                           onSelect={props.onSelect}/>
        })
      }
    </ul>
  );
}
