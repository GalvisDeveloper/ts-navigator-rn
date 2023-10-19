import React, { createContext } from 'react';

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

	// const [state, dispatch] = useReducer(first, second, third)

	return (
		<AuthContext.Provider
			value={{
				authState: authInitialState,
				signIn: () => {},
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
