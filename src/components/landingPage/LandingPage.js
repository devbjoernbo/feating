import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Clock from './Clock';
const useStyles = makeStyles({
	root: {
		flexGrow: 1
	},
	gridItem_root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const LandingPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={4} className={classes.gridItem_root}>
					{/* Dato og tid (tidskift med react-spring) */}
					<Clock />
				</Grid>
				<Grid item xs={8}>
					{/* Tre dages kostplan. Vises med retter, råvarer og indholdsværdier. Man kan derudover trykke på et icon, når man er færdig med retten */}
				</Grid>
				<Grid item xs={12}>
					{/* 
						Billede-visning af madretter/opskrifter, som vises i rækker
						(vises ligesom Netflix's rækkeinddeling af film).
						Brugeren kan vælge, om rækkerne skal indeholde retter efter
						fødevaret- eller indholdsværdi kategorien.

					*/}
				</Grid>
				<Grid item xs={12}>
					{/* 
						Billede-visning af råvarer, som vises i rækker
						(vises ligesom Netflix's rækkeinddeling af film).
						Brugeren kan vælge, om rækkerne skal indeholde råvare efter
						fødevaret- eller indholdsværdi kategorien.
					*/}
				</Grid>
				<Grid item xs={6}>
					{/* 
						Ny opskrift. Processen inddeles i 3 steps -->
						1) Tilføj opskriftnavn 2) Tilføj ingredienser/råvarer 3) Vælg kategorier
						Processen vises med en stepper (Material UI - Navigation/Steppers)
					*/}
				</Grid>
				<Grid item xs={6}>
					{/* 
						Ny råvare. Processen inddeles i 3 steps -->
						1) Tilføj navn på råvare 2) Tilføj indholdsdværdier pr. 100g 3) Vælg kategorier
						Processen vises med en stepper (Material UI - Navigation/Steppers)
					*/}
				</Grid>
			</Grid>
		</div>
	);
};

export default LandingPage;

/*
Kategorier - Fødevarer:
 	- Kød
 	- Fjerkræ
 	- Fisk
 	- Æg
 	- Grøntsag
 	- Frugt
 	- Olie
 	- Nød
 	- Frø
Kategorier - Indholdsværdier:
	- Kilde til proteiner
	- Kilde til fedt
	- Kilde til mættet fedt
	- Kilde til omega-3
	- Kilde til Sulforfan 
*/
