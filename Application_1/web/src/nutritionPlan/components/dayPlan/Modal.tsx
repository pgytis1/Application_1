import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import { Dish } from '../../../model';
import { recipeStyles, RecipeWithStyles } from '../../styles';
import Recipe from './Recipe';

interface OwnProps {
    open: boolean;
    dish: Dish;
    handleClose: () => void;
}

type Props = OwnProps & RecipeWithStyles;

class Modal extends React.Component<Props> {
    Transition = (props: any) => {
        return <Slide direction="up" {...props} />;
    }

    render() {
        const { classes, open, dish, handleClose} = this.props;
        return (
            <div>
                <Dialog
                    fullScreen={true}
                    open={open}
                    onClose={handleClose}
                    transition={this.Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" className={classes.flex}>
                                Receptas
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Recipe dish={dish} />
                </Dialog>
            </div>
        );
    }
}

export default withStyles(recipeStyles)(Modal);