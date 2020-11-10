import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';
import { Action } from 'typescript-fsa';

interface OwnProps {
    name: string,
    updateName: any
}

type InputCustomProps = OwnProps

export const InputCustom: React.FC<InputCustomProps> = (props: InputCustomProps) => {
    return (
        <div>
            <div className="field">
                <input
                    type="text"
                    placeholder="name"
                    value={props.name}
                    onChange={(e) => props.updateName(e.target.value)}
                />
            </div>
        </div>
    );
};