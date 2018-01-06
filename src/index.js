import { validate } from './validation';
import FetchAsyncApi from './asyncFetch';

const api = ({ dispatch, getState }) => next => action => {

    if (!action.request) {
        return next(action);
    }

    function actionToDispatch(actionType, actionData) {
        dispatch({ type: actionType, payload: actionData });
    }

    const validation = validate(action.request);
    if (validation) {
        const getResponse = FetchAsyncApi.requestApi(action.request);
        getResponse.then(function (data) {
            if (data) {
                return actionToDispatch(action.request.types[0], data);
            }
        }).catch(function (err) {
            return actionToDispatch(action.request.types[1], err.message);
        });
    }

}

export default api;