import 
	{PAGINATED_DOCUMENTS,
     PAGINATED_USERS } from "../action/types";

const initialState = {
	items: [],
	pageCount: 0
};

/**
 * @export
 * @param {any} [state={}]
 * @param {any} [action={}
 * @returns {onject} object
*/

export default function documents(state = initialState, action = {}) {
	switch (action.types) {
		case PAGINATED_DOCUMENTS:
			return {
				items: action.documents,
				pageCount: action.pageCount
			};
		case PAGINATED_USERS:
			return {
				items: action.users,
				pageCount: action.pageCount
			};

		default: return state;
	}
}