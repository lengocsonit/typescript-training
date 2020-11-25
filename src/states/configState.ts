import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { configActions } from '../actions/configActions';

export interface ConfigState {
    language: string;
}

const initialState: ConfigState = {
    language: 'ja'
};

export const configReducer = reducerWithInitialState(initialState)
    .case(configActions.updateLanguage, (state, language) => {
        return Object.assign({}, state, { language });
    });