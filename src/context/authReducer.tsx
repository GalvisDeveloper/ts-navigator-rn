import { AuthState } from './AuthContext';

type AuthAction =
	| { type: 'signIn'; payload: { username: string; token: string } }
	| { type: 'logout' }
	| { type: 'changeFavoriteIcon'; payload: string };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
	switch (action.type) {
		case 'signIn':
			return {
				...state,
				isLogged: true,
				username: action.payload.username,
				token: action.payload.token,
			};
		case 'logout':
			return {
				...state,
				isLogged: false,
				username: undefined,
				token: undefined,
			};
		case 'changeFavoriteIcon':
			return {
				...state,
				favoriteIcon: action.payload,
			};
		default:
			return state;
	}
};
