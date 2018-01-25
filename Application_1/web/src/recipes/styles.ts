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