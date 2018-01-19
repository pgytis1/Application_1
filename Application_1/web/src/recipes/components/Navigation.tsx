import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Avatar from 'material-ui/Avatar';
import deepOrange from 'material-ui/colors/deepOrange';

const styles = (theme: any) => ({
    button: {
        margin: 0,
        padding: 0
    },
    avatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
});

interface OwnProps { }

type Props = OwnProps & WithStyles<'button' | 'avatar'>;

class Navigation extends React.Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button color="primary" aria-label="add" className={classes.button}>
                    <Avatar className={classes.avatar}>Pi.</Avatar>
                </Button>
                <Button mini={true} color="primary" aria-label="add" className={classes.button}>
                    <Avatar className={classes.avatar}>Pi.</Avatar>
                </Button>
                <Button color="accent" aria-label="edit" className={classes.button}>
                    <Avatar className={classes.avatar}>Pi.</Avatar>
                </Button>
                <Button mini={true} color="accent" aria-label="edit" className={classes.button}>
                    <Avatar className={classes.avatar}>Pi.</Avatar>
                </Button>
                <Button aria-label="delete" className={classes.button}>
                    <Avatar className={classes.avatar}>Pi.</Avatar>
                </Button>
                <Button aria-label="delete" className={classes.button}>
                    <Avatar className={classes.avatar}>Pi.</Avatar>
                </Button>
                <Button aria-label="delete" className={classes.button}>
                    <Avatar className={classes.avatar}>
                        <AddIcon />
                    </Avatar>
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);