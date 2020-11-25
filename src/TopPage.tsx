import React, { FunctionComponent, useState, useEffect } from "react";
import { LanugageSelector } from "./LanguageSelector";
import { useTranslation } from 'react-i18next';

export const TopPage: FunctionComponent = () => {
    const [t, i18n] = useTranslation();
    const languages = [{ code: "ja", name: "Japanese" }, { code: "en", name: "English" }];
    const [currentLang, setCurrentLang] = useState("ja");
    // Change language of i18n
    useEffect(() => {

    }, [currentLang, i18n]);
    // Handler
    const handleLanguageSelectionChange = (lang: string) => {
        i18n.changeLanguage(lang);
        window.localStorage.setItem("lang", lang);
    }
    return (
        <>
            <header className="header">
                <button onClick={() => { handleLanguageSelectionChange("ja") }}>Tieng Nhat</button>
                <button onClick={() => { handleLanguageSelectionChange("en") }}>Tieng Anh</button>
            </header>
        </>
    )
}