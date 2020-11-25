import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';
import { InputCustom } from './inputCustom'
import { useTranslation } from 'react-i18next'
import { TopPage } from "../TopPage"

interface OwnProps { }

type HogeProps = OwnProps & HogeState & HogeActions;

/**
 * HogeComponentを描画する
 * @constructor
 * @module HogeComponent
 * @param {HogeProps} props - プロパティー.
 * @returns {Element} JSXElement
 */
export const HogeComponent: React.FC<HogeProps> = (props: HogeProps) => {
    const [t, i18n] = useTranslation();
    return (
        <div>
            <InputCustom name={props.name} updateName={props.updateName} />
            <div className="field">
                <input
                    type="email"
                    placeholder="email"
                    value={props.email}
                    onChange={(e) => props.updateEmail(e.target.value)}
                />
            </div>
            <h1>{props.email}</h1>
            <h1>{t('em')}</h1>
            <TopPage>

            </TopPage>
        </div>
    );
};