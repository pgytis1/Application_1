import * as React from 'react';
import Button from 'material-ui/Button';
import List from 'material-ui-icons/List';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Grid } from 'material-ui';
import Typography from 'material-ui/Typography';
import { Dish, DishType } from '../../../model';
import { dayPlanStyles, DayPlanWithStyles } from '../../styles';
import { withStyles } from 'material-ui/styles';
import Modal from './Modal';

interface OwnProps {
    dish: Dish;
}

interface OwnState {
    open: boolean;
}

type Props = OwnProps & DayPlanWithStyles;

class DayPlanItem extends React.Component<Props, OwnState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { dish, classes } = this.props;
        return (
            <Grid item={true}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2">
                            {dish.name}
                        </Typography>
                        <Typography component="p">
                            <div>
                                <b>Kiekis: </b>{dish.grams} gram.
                        </div>
                            <div>
                                <b>Kalorijų: </b>{dish.kcal} kcal
                        </div>
                        </Typography>

                    </CardContent>
                    <CardActions>
                        {DishType.recipe === dish.type &&
                            <Button
                                color="primary"
                                className={classes.button}
                                raised={true}
                                dense={true}
                                onClick={this.handleOpen}
                            >
                                Receptas
                            <List className={classes.leftIcon} />
                            </Button>
                        }
                    </CardActions>
                </Card>
                <Modal dish={dish} open={this.state.open} handleClose={this.handleClose} />
            </Grid>
        );
    }
}

export default withStyles(dayPlanStyles)(DayPlanItem);