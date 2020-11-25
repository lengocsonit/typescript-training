import { createStore, combineReducers } from 'redux';
import { hogeReducer, HogeState } from './states/hogeState';
import { configReducer, ConfigState } from './states/configState';

export type AppState = {
    hoge: HogeState,
    config: ConfigState
};

const store = createStore(
    combineReducers<AppState>({
        hoge: hogeReducer,
        config: configReducer
    })
);

export default store;