import * as React from "react";

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
          return (
            <li key={lang}
                className={lang === props.selectedLanguage ? 'selected' : ''}
                onClick={props.onSelect.bind(this, lang)}>
              {lang}
            </li>
          )
        })
      }
    </ul>
  );
}
