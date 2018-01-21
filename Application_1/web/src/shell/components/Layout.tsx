import * as React from 'react';
import { withStyles, WithStyles, Theme } from 'material-ui/styles';
import * as classNames from 'classnames';
import DrawerNav from './DrawerNav';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

const drawerWidth = 240;

const styles = (theme: Theme) => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden' as any,
    },
    appFrame: {
        position: 'relative' as any,
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute' as any,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative' as any,
        height: '100%',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 60,
        overflowX: 'hidden' as any,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerInner: {
        // Make the items inside not wrap when transitioning:
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center' as any,
        justifyContent: 'flex-end' as any,
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    }
});

interface OwnProps {
}

interface OwnState {
    open: boolean;
}

type Props = OwnProps & WithStyles<'content' | 'drawerHeader' | 'drawerInner' | 'drawerPaperClose'
    | 'drawerPaper' | 'hide' | 'menuButton' | 'appBarShift' | 'appBar' | 'appFrame' | 'root'>;

class Layout extends React.Component<Props, OwnState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleDrawerOpen = () => {
        this.setState(() => ({ open: true }));
    }

    handleDrawerClose = () => {
        this.setState(() => ({ open: false }));
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap={true}>
                                Mini variant drawer
                            </Typography>
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

export default withStyles(styles, { withTheme: true })(Layout);