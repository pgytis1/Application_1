import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
// import AddIcon from 'material-ui-icons/Add';
import Avatar from 'material-ui/Avatar';
import { enums } from '../../model';
import { daysNavStyles, DaysNavWithStyles } from '../styles';

interface OwnProps { }

type Props = OwnProps & DaysNavWithStyles;

class DaysNav extends React.Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div>
                {
                    enums.Days.datasource().map(x => (
                        <Button color="primary" aria-label={x.name} className={classes.button}>
                            <Avatar className={classes.avatar}>{x.name.slice(0, 2)}.</Avatar>
                        </Button>
                    ))
                }

                {/* <Button aria-label="delete" className={classes.button}>
                    <Avatar className={classes.avatar}>
                        <AddIcon />
                    </Avatar>
                </Button> */}
            </div>
        );
    }
}

export default withStyles(daysNavStyles)(DaysNav);