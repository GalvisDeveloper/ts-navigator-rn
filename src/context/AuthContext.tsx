import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
	isLogged: boolean;
	username?: string;
	token?: string;
	favoriteIcon?: string;
}

export const authInitialState: AuthState = {
	isLogged: false,
	username: undefined,
	token: undefined,
	favoriteIcon: undefined,
};

export interface AuthContextProps {
	authState: AuthState;
	signIn: () => void;
	logout: () => void;
	changeFavIcon: (iconName: string) => void;
	changeUsername: (username: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
	const [authState, dispatch] = useReducer(authReducer, authInitialState);

	const signIn = () => {
		dispatch({
			type: 'signIn',
			payload: { username: 'test', token: 'test' },
		});
	};

	const logout = () => {
		dispatch({ type: 'logout' });
	};

	const changeFavIcon = (iconName: string) => {
		dispatch({
			type: 'changeFavoriteIcon',
			payload: iconName,
		});
	};

	const changeUsername = (username: string) => {
		dispatch({
			type: 'changeUsername',
			payload: username,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				authState,
				signIn,
				changeFavIcon,
				logout,
				changeUsername,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
