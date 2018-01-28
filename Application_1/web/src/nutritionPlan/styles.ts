import deepOrange from 'material-ui/colors/deepOrange';
import { Theme, WithStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';

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

type DayPlanStyles = 'root' | 'card' | 'title' | 'leftIcon' | 'button' | 'purpleAvatar';
export type DayPlanWithStyles = WithStyles<DayPlanStyles>;
export const dayPlanStyles = (theme: Theme) => ({
    root: {
        width: '100%',
        paddingRight: '30px'
    },
    card: {
        minWidth: 275,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    button: {
        color: '#fff',
        backgroundColor: green[500],
    },
    leftIcon: {
        marginLeft: theme.spacing.unit,
    },
    purpleAvatar: {
        backgroundColor: '#3f51b5',
    }
});

type RecipeStyles = 'appBar' | 'flex';
export type RecipeWithStyles = WithStyles<RecipeStyles>;
export const recipeStyles = () => ({
    appBar: {
        position: 'relative' as any,
    },
    flex: {
        flex: 1,
    },
});