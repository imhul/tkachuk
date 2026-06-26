import { initStateUI as initState } from "../init/initStateUI"
import { UI_UX_types as type } from "../constants/types"

export default (state = initState, action) => {
    switch (action.type) {
        case type.HERO_ANIMATE:
            return {
                ...state,
                heroStyle: { transform: "scale(1)", opacity: 1 }
            }

        case type.SET_LANG:
            return {
                ...state,
                lang: action.payload
            }

        case type.TOGGLE_USER_LANG_SELECT:
            return {
                ...state,
                isUserLangSelected: true
            }

        case type.TOGGLE_TOOLBAR:
            return {
                ...state,
                isMenuOpen: action.payload
            }

        default:
            return state
    }
}
