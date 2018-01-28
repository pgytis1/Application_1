import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Avatar from 'material-ui/Avatar';
import { dayPlanStyles, DayPlanWithStyles } from '../../styles';
// import Divider from 'material-ui/Divider/Divider';
import { Grid } from 'material-ui';
import DayPlanItem from './DayPlanItem';
import { Dish, DishType } from '../../../model';

interface OwnState {
    expanded: string | null;
}

interface OwnProps { }

type Props = OwnProps & DayPlanWithStyles;

class DayPlan extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            expanded: null
        };
    }

    handleChange = (panel: any) => (event: any, expanded: any) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    }

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        const meal: Dish[] = [
            { id: 1, name: 'Abrikosai', grams: 50, kcal: 200, type: DishType.product },
            { id: 1, name: 'Abrikosai', grams: 50, kcal: 200, type: DishType.recipe },
            { id: 1, name: 'Abrikosai', grams: 50, kcal: 200, type: DishType.product },
            { id: 1, name: 'Abrikosai', grams: 50, kcal: 200, type: DishType.recipe },
            { id: 1, name: 'Abrikosai', grams: 50, kcal: 200, type: DishType.product },
            { id: 1, name: 'Abrikosai', grams: 50, kcal: 200, type: DishType.recipe },
            {
                id: 1, name: 'Abrikosai', grams: 50, kcal: 200, type: DishType.recipe, products: [
                    { id: 1, name: 'Abrikosai', grams: 50, kcal: 200 },
                    { id: 1, name: 'Abrikosai', grams: 50, kcal: 200 },
                    { id: 1, name: 'Abrikosai', grams: 50, kcal: 200 }
                ]
            }
        ];

        return (
            <div className={classes.root}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            <Avatar className={classes.purpleAvatar}>1</Avatar>
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <Grid container={true} spacing={40} >
                                {meal.map(x => (
                                    <DayPlanItem dish={x} />)
                                )}
                            </Grid>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default withStyles(dayPlanStyles)(DayPlan);