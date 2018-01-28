import * as React from 'react';
import { Dish } from '../../../model';
import { withStyles, WithStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

interface OwnProps {
    dish: Dish;
}

const styles = {
    card: {
        with: '100%'
    }
};

// action?: 'view' | 'edit' | 'create';

type Props = OwnProps & WithStyles<'card'>;

class Recipe extends React.Component<Props> {
    render() {
        const { classes, dish } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2">
                            {dish.name}
                        </Typography>
                        <Grid container={true}>
                            {dish.products && dish.products.map(x => (
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
                                            e
                                    </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button dense={true} color="primary">
                            Redaguoti
                        </Button>
                        <Button dense={true} color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Recipe);