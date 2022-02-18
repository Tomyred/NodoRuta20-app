import * as types from "../types/index.js";
import * as api from "../api";

export const loadLinks = () => async dispatch => {
    try {
        dispatch({
            type: types.ENTITIES_LINKS_LOAD_INIT,
        });

        const res = await api.load();

        if (res.data.error === false) {
            dispatch({
                type: types.ENTITIES_LINKS_LOAD_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.ENTITIES_LINKS_LOAD_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.ENTITIES_LINKS_LOAD_FAILED,
        });
    }
};

export const saveLink = ENTITIES_link => async dispatch => {
    try {
        dispatch({
            type: types.ENTITIES_LINK_SAVE_INIT,
        });

        const res = await api.save(ENTITIES_link);
        if (res.data.error === false) {
            dispatch({
                type: types.ENTITIES_LINK_SAVE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.ENTITIES_LINK_SAVE_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.ENTITIES_LINK_SAVE_FAILED,
        });
    }
};

export const removeLink = id => async dispatch => {
    try {
        dispatch({
            type: types.ENTITIES_LINK_DELETE_INIT,
        });
        const res = await api.remove(id);
        if (res.data.error === false) {
            dispatch({
                type: types.ENTITIES_LINK_DELETE_SUCCEED,
            });
        } else {
            dispatch({
                type: types.ENTITIES_LINK_DELETE_FAILED,
            });
        }
    } catch (error) {
        dispatch({
            type: types.ENTITIES_LINK_DELETE_FAILED,
        });
    }
};
