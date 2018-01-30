import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Avatar from 'material-ui/Avatar';
import { daysNavStyles, DaysNavWithStyles } from '../styles';
import { Day } from '../../model';

interface OwnProps {
    days: Day[];
    onAddDay: () => void;
    onChangeDay: (nr: number) => void;
}

type Props = OwnProps & DaysNavWithStyles;

class DaysNav extends React.Component<Props> {

    handleAddDay = () => {
        const { days, onAddDay } = this.props;
        if (days.length < 7) {
            onAddDay();
        }
    }

    render() {
        const { classes, days, onChangeDay } = this.props;
        return (
            <div>
                {days.map((x, i) => (
                    <Button
                        key={i}
                        color="primary"
                        aria-label={x.name}
                        className={classes.button}
                        onClick={() => onChangeDay(i)}
                    >
                        <Avatar className={classes.avatar}>{x.name.slice(0, 2)}.</Avatar>
                    </Button>
                ))}
                {days.length < 7 && <Button aria-label="delete" className={classes.button}>
                    <Avatar className={classes.avatar} onClick={this.handleAddDay}>
                        <AddIcon />
                    </Avatar>
                </Button>}
            </div>
        );
    }
}

export default withStyles(daysNavStyles)(DaysNav);