import * as React from 'react';
import { withStyles, WithStyles, Theme } from 'material-ui/styles';
import * as classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
// import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
// import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
// import ReportIcon from 'material-ui-icons/Report';
import deepOrange from 'material-ui/colors/deepOrange';

const drawerWidth = 240;

const styles = (theme: Theme) => ({
    root: {
        width: '100%',
        height: '100%',
        // marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden' as any,
        // flexGrow: 1,
        // padding: '0px 5px 0px 5px',
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
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 16
    },
    button: {
        margin: 0,
        padding: 0
    },
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    alignCenter: {
        textAlign: 'center',
        marginTop: 10
    },
});

type OwnProps = {
    classes?: any
};

type Props = OwnProps & WithStyles<'content' | 'drawerHeader' | 'drawerInner' | 'drawerPaperClose'
    | 'drawerPaper' | 'hide' | 'menuButton' | 'appBarShift' | 'appBar' | 'appFrame' | 'root' | 'paper' | 'button'
    | 'alignCenter'
    | 'avatar'>;

class MiniDrawer extends React.Component<Props> {
    state = {
        open: false,
    };

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
                            <List className={classes.list}>
                                <ListItem button={true}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                </ListItem>
                                <ListItem button={true}>
                                    <ListItemIcon>
                                        <DeleteIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Starred" />
                                </ListItem>
                                <ListItem button={true}>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Send mail" />
                                </ListItem>
                                <ListItem button={true}>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </ListItem>
                            </List>
                            <Divider />
                            {/* <List className={classes.list}>{otherMailFolderListItems}</List> */}
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

export default withStyles(styles, { withTheme: true })(MiniDrawer);

// import * as React from 'react';
// import { withStyles, WithStyles } from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import AccountCircle from 'material-ui-icons/AccountCircle';
// import Switch from 'material-ui/Switch';
// import { FormControlLabel, FormGroup } from 'material-ui/Form';
// import Menu, { MenuItem } from 'material-ui/Menu';

// const styles = {
//     root: {
//         width: '100%',
//     },
//     flex: {
//         flex: 1,
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20,
//     },
// };

// interface OwnProps {
// }

// interface OwnState {
//     auth: boolean;
//     anchorEl: any;
// }

// type Props = OwnProps & WithStyles<'root' | 'flex' | 'menuButton'>;

// class Navbar extends React.Component<Props, OwnState> {

//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             auth: true,
//             anchorEl: false,
//         };
//     }

//     handleChange = (event: any, checked: any) => {
//         this.setState(() => ({ auth: checked }));
//     }

//     handleMenu = (event: any) => {
//         this.setState(() => ({ anchorEl: event.currentTarget }));
//     }

//     handleClose = () => {
//         this.setState(() => ({ anchorEl: null }));
//     }

//     render() {
//         const { classes } = this.props;
//         const { auth, anchorEl } = this.state;
//         const open = Boolean(anchorEl);

//         return (
//             <div className={classes.root}>
//                 <FormGroup>
//                     <FormControlLabel
//                         control={<Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />}
//                         label={auth ? 'Logout' : 'Login'}
//                     />
//                 </FormGroup>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography type="title" color="inherit" className={classes.flex}>
//                             Title
//                         </Typography>
//                         {auth && (
//                             <div>
//                                 <IconButton
//                                     aria-owns={open ? 'menu-appbar' : null}
//                                     aria-haspopup="true"
//                                     onClick={this.handleMenu}
//                                     color="contrast"
//                                 >
//                                     <AccountCircle />
//                                 </IconButton>
//                                 <Menu
//                                     id="menu-appbar"
//                                     anchorEl={anchorEl}
//                                     anchorOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                     transformOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                     open={open}
//                                     onClose={this.handleClose}
//                                 >
//                                     <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                                     <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                                 </Menu>
//                             </div>
//                         )}
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         );
//     }
// }

// export default withStyles(styles)(Navbar);