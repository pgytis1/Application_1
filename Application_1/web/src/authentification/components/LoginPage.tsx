import * as React from 'react';
import { connect } from 'react-redux';
import * as m from '../model';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { loginStyles as styles, LoginWithStyles } from '../styles';
import { RootState } from '../../store';
import { returnTypeOf } from '../../utils/index';

const mapStateToProps = (state: RootState) => {
    const { error } = m.selectors.getOwn(state);
    return { error };
};

type OwnState = {
    email: string;
    password: string;
};

type DispatchProps = typeof m.actions;

const stateProps = returnTypeOf(mapStateToProps);
type StateProps = typeof stateProps;

type Props = DispatchProps & LoginWithStyles & StateProps;

class LoginPage extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        this.setState(() => ({
            email: value
        }));
    }

    handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        this.setState(() => ({
            password: value
        }));
    }

    handleSubmit = () => {
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        const { classes, error } = this.props;
        return (
            <Grid container={true} alignItems="center" justify="center">
                <Grid item={true} xs={10} sm={6} md={4} lg={3}>
                    <Card className={classes.card} raised={true} >
                        <CardContent>
                            <Typography align="center"><b>Prisijungimas</b></Typography>
                            <TextField
                                id="email"
                                label="El. paštas"
                                onChange={(e) => this.handleEmailChange(e)}
                                value={this.state.email}
                                margin="normal"
                                fullWidth={true}
                                type="email"
                                error={error ? true : false}
                            />
                            <TextField
                                id="password"
                                label="Slaptažodis"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => this.handlePasswordChange(e)}
                                value={this.state.password}
                                margin="normal"
                                fullWidth={true}
                                error={error ? true : false}
                                helperText={error}
                            />
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Button raised={true} color="primary" onClick={this.handleSubmit}>
                                Pirmyn
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default connect<StateProps, DispatchProps, {}>(mapStateToProps, m.actions)(withStyles(styles)(LoginPage));