import * as React from 'react';
import { connect } from 'react-redux';
import * as m from '../model';

type OwnState = {
    email: string;
    password: string;
};

type DispatchProps = typeof m.actions;

type Props = DispatchProps;

const mapStateToProps = () => {
    return {};
};

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
        console.log("xx");
        const value = e.currentTarget.value;
        console.log(value);
        this.setState(() => ({
            password: value
        }));
    }

    handleSubmit = () => {
        this.props.login(this.state.email, this.state.password);
        console.log("login", this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="container d-flex justify-content-center" style={{ marginTop: '120px' }}>
                <div className="col-6 col-md-5 col-lg-4 col-xl-3">
                    <h1 className="text-center pb-5">GIIS</h1>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="El. paštas" autoFocus={true} onChange={(e) => this.handleEmailChange(e)} />
                        <input className="form-control" type="text" placeholder="Slaptažodis" onChange={(e) => this.handlePasswordChange(e)} />
                        <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Prisijungti</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect<{}, DispatchProps, {}>(mapStateToProps, m.actions)(LoginPage);