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

	return (
		<AuthContext.Provider
			value={{
				authState,
				signIn,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
