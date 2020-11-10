import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';
import { InputCustom } from './inputCustom'

interface OwnProps { }

type HogeProps = OwnProps & HogeState & HogeActions;

export const HogeComponent: React.FC<HogeProps> = (props: HogeProps) => {
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
            <h1>{props.name}</h1>
        </div>
    );
};