import React from "react";
import Select from "react-select";
import { dynamicActivate } from "../i18n.js";

export default function LanguageToggler() {
  const locale = window.localStorage.getItem("language");
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ar", label: "Arabic" },
  ];
  const changeLanguage = (selectedOption) => {
   const item = languageOptions.find((lang,index)=>lang.value === locale)
   console.log(item)
    window.localStorage.setItem("language", selectedOption.value);
    dynamicActivate(selectedOption.value);
  };
  return (
    <div className="absolute">
      <Select
        className="basic-single"
        classNamePrefix="select"
        name="language"
        options={languageOptions}
        onChange={changeLanguage}
        defaultValue={languageOptions.find((lang)=>lang.value === locale)}
      />
    </div>
  );
}
