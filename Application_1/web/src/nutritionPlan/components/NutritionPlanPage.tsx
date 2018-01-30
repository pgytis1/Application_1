import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import DaysNav from './DaysNav';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { NutrintionPlanWithStyles, nutritionPlanStyles } from '../styles';
import DayPlan from './dayPlan/DayPlan';
import { returnTypeOf } from '../../utils/index';
import { RootState } from '../../store';
import * as m from '../model';

const mapStateToProps = (state: RootState) => {
    const { days } = m.selectors.getOwn(state);
    return {
        days
    };
};

interface RouteProps {
    id?: string;
}

const stateProps = returnTypeOf(mapStateToProps);

type StateProps = typeof stateProps;

type DispatchProps = typeof m.actions;

interface OwnProps { }

interface OwnState {
    dayNr: number | undefined;
}

type Props = OwnProps & NutrintionPlanWithStyles & StateProps & DispatchProps & RouteComponentProps<RouteProps>;

class NutritionPlanPage extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            dayNr: undefined
        };
    }

    componentDidMount() {
        this.setState(() => ({
            dayNr: 0
        }));
    }

    changeDay = (nr: number) => {
        this.setState(() => ({
            dayNr: nr
        }));
        console.log(nr);
    }

    render() {
        const { classes, days, addDay } = this.props;
        const { dayNr } = this.state;
        return (
            <div className={classes.root}>
                <Grid container={true} spacing={40} >
                    <Grid xs={12} md={1} item={true} className={classes.alignCenter}>
                        <DaysNav days={days} onAddDay={addDay} onChangeDay={this.changeDay} />
                    </Grid>
                    <Grid xs={12} md={true} item={true}>
                        {dayNr && <DayPlan meals={days[dayNr] && days[dayNr].meals || []} />}
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, m.actions)(withStyles(nutritionPlanStyles)(NutritionPlanPage));