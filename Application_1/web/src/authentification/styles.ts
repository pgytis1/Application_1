import { Theme, WithStyles } from 'material-ui/styles';

type LoginStyles = 'card' | 'button';
export type LoginWithStyles = WithStyles<LoginStyles>;
export const loginStyles = (theme: Theme) => ({
    card: {
        marginTop: 40
    },
    button: {
        float: 'right'
    }
});