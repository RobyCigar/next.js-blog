import { useState, createContext, useContext} from 'react';

const AppCtx = createContext();

export function AppWrapper({children}) {
	const [ darkMode, setDarkMode ] = useState(false)

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
	}

	return (
		<AppCtx.Provider value={{darkMode, handleDarkMode}}>
			{children}
		</AppCtx.Provider>
	)
}

export function useAppCtx() {
	return useContext(AppCtx);
}