import * as React from 'react';
import DaysNav from './DaysNav';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles, WithStyles } from 'material-ui/styles';

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
        padding: '0px 5px 0px 5px',
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 16
    },
    alignCenter: {
        textAlign: 'center',
        marginTop: 10
    },
});

interface OwnProps {}

type Props = OwnProps & WithStyles<'root' | 'paper' | 'alignCenter'>;

class Recipes extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container={true} spacing={40} >
                    <Grid xs={12} md={1} item={true} className={classes.alignCenter}>
                        <DaysNav />
                    </Grid>
                    <Grid xs={12} md={true} item={true}>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid xs={12} md={true} item={true}>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Recipes);