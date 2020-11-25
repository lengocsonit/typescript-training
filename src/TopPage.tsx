import React, { FunctionComponent, useState, useEffect } from "react";
import { LanugageSelector } from "./LanguageSelector";
import { useTranslation } from 'react-i18next';

export const TopPage: FunctionComponent = () => {
    const [t, i18n] = useTranslation();
    const languages = [{ code: "ja", name: "Japanese" }, { code: "en", name: "English" }];
    const [currentLang, setCurrentLang] = useState("ja");
    // Change language of i18n
    useEffect(() => {
        i18n.changeLanguage(currentLang);
    }, [currentLang, i18n]);
    // Handler
    const handleLanguageSelectionChange = (lang: string) => {
        setCurrentLang(lang);
    }
    return (
        <>
            <header className="header">
                <button onClick={() => { handleLanguageSelectionChange("ja") }}>Tieng Anh</button>
                <button onClick={() => { handleLanguageSelectionChange("en") }}>Tieng Nhat</button>
            </header>
        </>
    )
}