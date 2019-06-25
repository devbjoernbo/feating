import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Navbar from './navbar/Navbar';
import LandingPage from './landingPage/LandingPage';

// Creating Global responsive theme
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const App = () => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				{/* 
					Brug react-router-dom til at navigere i menuen og i navbaren. 
				*/}
				<CssBaseline />
				<Navbar />
				{/* 
					Lav en Persistent Drawer, med links til alle de vigtige elementer
					(Material UI - Components/Navigation/Drawers)
					
				*/}

				<LandingPage />
			</ThemeProvider>
		</div>
	);
};

export default App;
