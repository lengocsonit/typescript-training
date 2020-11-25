import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const configActions = {
    updateLanguage: actionCreator<string>('ACTIONS_UPDATE_LANGUAGE')
};