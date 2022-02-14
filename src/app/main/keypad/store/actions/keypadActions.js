import * as types from "../types/keypadTypes";
import * as api from "../api/api";

export const loadLinks = () => async dispatch => {
    try {
        dispatch({
            type: types.LINKS_LOAD_INIT,
        });

        const res = await api.load();

        if (res.data.error === false) {
            dispatch({
                type: types.LINKS_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.LINKS_LOAD_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.LINKS_LOAD_FAILED,
        });
    }
};

export const saveLink = link => async dispatch => {
    try {
        dispatch({
            type: types.LINK_SAVE_INIT,
        });

        const res = api.save(link);

        if (res.data.error === false) {
            dispatch({
                type: types.LINK_SAVE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.LINK_SAVE_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.LINK_SAVE_FAILED,
        });
    }
};
