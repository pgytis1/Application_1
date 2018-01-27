import deepOrange from 'material-ui/colors/deepOrange';
import { Theme, WithStyles } from 'material-ui/styles';

type DaysNavStyles = 'button' | 'avatar';
export type DaysNavWithStyles = WithStyles<DaysNavStyles>;
export const daysNavStyles = (theme: Theme) => ({
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

type NutrintionPlanStyles = 'root' | 'paper' | 'alignCenter';
export type NutrintionPlanWithStyles = WithStyles<NutrintionPlanStyles>;
export const nutritionPlanStyles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
        padding: '0px 30px 0px 5px',
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