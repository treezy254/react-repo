import axios from 'axios';
import { PAGINATED_USERS } from './types';

export function setPaginateUser(users, pageCount) {
	return {
		type: PAGINATED_USERS,
		users,
		pageCount
	};
}

/**
 * @export
 * @param {any} offset
 * @param {any} limit
 * @returns {object} object
 */

export default function paginateUserActions(offset, limit) {
	return (dispatch) => {
		return axios.get(`/users/?limit=${limit}&offset=${offset}`)
			.then((respose) => {
				dispatch(setPaginateUser(respose.data.users.rows,
					respose.data.pagination.pageCount));
			}).catch((err) => {

			});
	};
}