import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { Store } from 'redux';
import { RootState } from './store';
import * as auth from './authentification';
import './App.css';
import LoginPage from './authentification/components/LoginPage';
// import RecipesPage from './recipes/components/RecipesPage';
import Layout from './shell/components/Layout';

type OwnProps = {
  store: Store<RootState>
};

const mapStateToProps = () => {
  return {};
};

type DispatchProps = typeof auth.actions;

type Props = OwnProps & DispatchProps;

// const customHistory = createBrowserHistory();

class App extends React.Component<Props> {
  componentDidMount() {
    // this.props.login('e', 'ee');
  }

  render() {
    return (
      <Provider store={this.props.store}>

        {/* <Router history={customHistory}>
            <Switch>
            
            <Route path="/login" component={LoginPage} />
            
            <PrivateRoute>
            <Layout>
            <Switch>
            <Route path="/doctor" component={DoctorPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/patient" component={PatientContainer} />
            </Switch>
            </Layout>
            </PrivateRoute>
            
            </Switch>
          </Router> */}
        <Layout>
          <LoginPage />
        </Layout>

      </Provider>
    );
  }
}

export default connect<{}, DispatchProps, OwnProps>(mapStateToProps, auth.actions)(App);
