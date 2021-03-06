const initState = {
    data: [],
    classroomNames: [],
    entity: null,
    course: null,
    loading: false,
    loaded: false,
    loadingError: false,
    namesloading: false,
    namesLoaded: false,
    namesLoadingError: false,
    saving: false,
    saved: false,
    savingError: false,
    deleting: false,
    deleted: false,
    deletingError: false,
    deletingClassroom: false,
    classroomDeleted: false,
    deletingClassroomError: false,
};

export default function v_classroomReducer(state = initState, action) {
    switch (action.type) {
        case "V_CLASSROOM_LOAD_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
                saved: false,
            };
        case "V_CLASSROOM_LOAD_SUCCEED":
            return {
                ...state,
                data: action.payload,
                loading: false,
                loaded: true,
                loadingError: false,
            };
        case "V_CLASSROOM_LOAD_FAILED":
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
            };
        case "V_CLASSROOM_NAMES_LOAD_INIT":
            return {
                ...state,
                namesLoading: true,
                namesLoaded: false,
                namesLoadingError: false,
            };
        case "V_CLASSROOM_NAMES_LOAD_SUCCEED":
            return {
                ...state,
                classroomNames: action.payload,
                namesLoading: false,
                namesLoaded: true,
                namesLoadingError: false,
            };
        case "V_CLASSROOM_NAMES_LOAD_FAILED":
            return {
                ...state,
                namesLoading: false,
                namesLoaded: false,
                namesLoadingError: true,
            };

        case "V_CLASSROOM_ENTITY_LOAD_INIT":
            return {
                ...state,
                entity: null,
                loading: true,
                loaded: false,
                loadingError: false,
                saved: false,
            };
        case "V_CLASSROOM_ENTITY_LOAD_SUCCEED":
            return {
                ...state,
                entity: action.payload,
                loading: false,
                loaded: true,
                loadingError: false,
            };
        case "V_CLASSROOM_ENTITY_LOAD_FAILED":
            return {
                ...state,
                entity: null,
                loading: false,
                loaded: false,
                loadingError: true,
            };
        case "SAVE_V_INIT":
            return {
                ...state,
                saving: true,
                saved: false,
                savingError: false,
            };
        case "SAVE_V_SUCCEED":
            return {
                ...state,
                loaded: false,
                saving: false,
                saved: true,
                savingError: false,
            };
        case "SAVE_V_FAILED":
            return {
                ...state,
                saving: false,
                saved: false,
                savingError: true,
            };
        case "ADD_V_CLASSROOM_INIT":
            return {
                ...state,
                saving: true,
            };
        case "ADD_V_CLASSROOM_SUCCEED":
            return {
                ...state,
                loaded: false,
                saving: false,
                saved: true,
                namesLoaded: false,
            };
        case "ADD_V_CLASSROOM_FAILED":
            return {
                ...state,
                loaded: false,
                saving: false,
                savingError: true,
            };
        case "DELETE_V_COURSE_INIT":
            return {
                ...state,
                deleted: false,
                deletingError: false,
            };
        case "DELETE_V_COURSE_SUCCEED":
            return {
                ...state,
                deleted: true,
                deletingError: false,
            };
        case "DELETE_V_COURSE_FAILED":
            return {
                ...state,
                deletingError: true,
            };
        case "DELETE_V_CLASSROOM_INIT":
            return {
                ...state,
                deletingClassroom: true,
                classroomDeleted: false,
                deletingClassroomError: false,
            };
        case "DELETE_V_CLASSROOM_SUCCEED":
            return {
                ...state,
                deletingClassroom: false,
                classroomDeleted: true,
                deletingClassroomError: false,
                namesLoaded: false,
                loaded: false,
                entity: null,
            };
        case "DELETE_V_CLASSROOM_FAILED":
            return {
                ...state,
                deletingClassroom: false,
                deletingClassroomError: true,
            };

        case "SET_V_COURSE_DETAIL":
            return {
                ...state,
                course: action.payload,
            };
        default:
            return state;
    }
}
