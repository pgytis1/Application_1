import { Theme, WithStyles } from 'material-ui/styles';

type LoginStyles = 'card' | 'cardActions';
export type LoginWithStyles = WithStyles<LoginStyles>;
export const loginStyles = (theme: Theme) => ({
    card: {
        marginTop: 40,
        paddingBottom: 60
    },
    cardActions: {
        float: 'right'
    }
});