import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	},
	toolbar: {
		padding: '0 10% 0 10%'
	},
	title: {
		flexGrow: 1,
		textAlign: 'center'
	},
	popper: {
		marginTop: '8px'
	}
});

const Navbar = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	function handleToggle() {
		setOpen(prevOpen => !prevOpen);
	}

	function handleClose(event) {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" className={classes.title}>
						Kostplan
					</Typography>
					<div className={classes.title}>
						<Typography
							ref={anchorRef}
							variant="h6"
							aria-controls="menu-list-grow"
							aria-haspopup="true"
							onClick={handleToggle}
						>
							Opskrifter
						</Typography>
						<Popper
							open={open}
							anchorEl={anchorRef.current}
							disablePortal
							className={classes.popper}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList>
										<MenuItem>Alle</MenuItem>
										<MenuItem>Kød</MenuItem>
										<MenuItem>Fisk</MenuItem>
										<MenuItem>Fjerkræ</MenuItem>
										<MenuItem>Grøntsager</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Popper>
					</div>
					<Typography variant="h6" className={classes.title}>
						Ny opskrift
					</Typography>
					<Typography variant="h6" className={classes.title}>
						Inspiration
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
