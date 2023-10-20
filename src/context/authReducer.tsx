import { AuthState } from './AuthContext';

type AuthAction =
	| { type: 'signIn'; payload: { username: string; token: string } }
	| { type: 'logout' }
	| { type: 'changeFavoriteIcon'; payload: string }
	| { type: 'changeUsername'; payload: string };

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
				favoriteIcon: undefined,
			};
		case 'changeFavoriteIcon':
			return {
				...state,
				favoriteIcon: action.payload,
			};
		case 'changeUsername':
			return {
				...state,
				username: action.payload,
			};
		default:
			return state;
	}
};
