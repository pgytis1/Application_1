import * as React from 'react';
import DaysNav from './DaysNav';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { NutrintionPlanWithStyles, nutritionPlanStyles } from '../styles';
import DayPlan from './dayPlan/DayPlan';

interface OwnProps { }

type Props = OwnProps & NutrintionPlanWithStyles;

class NutritionPlanPage extends React.Component<Props> {
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
                        <DayPlan  />
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default withStyles(nutritionPlanStyles)(NutritionPlanPage);