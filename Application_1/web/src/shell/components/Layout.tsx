import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import * as classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import DrawerNav from './DrawerNav';
import { LayoutWithStyles, layoutStyles } from '../styles';
import { connect } from 'react-redux';
import * as authModel from '../../authentification/model';
import { returnTypeOf } from '../../utils/index';
import { RootState } from '../../store';

const mapStateToProps = (state: RootState) => {
    const { userName } = authModel.selectors.getOwn(state);
    return {
        userName
    };
};

const stateProps = returnTypeOf(mapStateToProps);

type StateProps = typeof stateProps;

type DispatchProps = typeof authModel.actions;

interface OwnProps { }

interface OwnState {
    open: boolean;
    anchorEl: any;
}

type Props = OwnProps & LayoutWithStyles & DispatchProps & StateProps;

class Layout extends React.Component<Props, OwnState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null
        };
    }

    handleDrawerOpen = () => {
        this.setState(() => ({ open: true }));
    }

    handleDrawerClose = () => {
        this.setState(() => ({ open: false }));
    }

    handleMenu = (event: React.MouseEvent<any>) => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    handleLogout = () => {
        this.props.logout();      
        this.handleClose();  
    }

    render() {
        const { classes, theme, userName } = this.props;
        const { open, anchorEl } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classNames(classes.appBar, open && classes.appBarShift)}>
                        <Toolbar disableGutters={!open}>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap={true} className={classes.flex}>
                                Mano mitybos planas!
                            </Typography>
                            {
                                userName ?
                                    <IconButton
                                        aria-owns={Boolean(anchorEl) ? 'menu-appbar' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    : <Button color="inherit">Prisijungti</Button>
                            }
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleLogout}>Atsijungti</MenuItem>
                            </Menu>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        type="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.drawerInner}>
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={this.handleDrawerClose}>
                                    {theme && theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                </IconButton>
                            </div>
                            <Divider />
                            <DrawerNav />
                            <Divider />
                        </div>
                    </Drawer>
                    <main className={classes.content}>
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, authModel.actions)(withStyles(layoutStyles, { withTheme: true })(Layout));