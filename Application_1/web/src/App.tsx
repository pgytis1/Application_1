import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Store } from 'redux';
import { RootState } from './store';
import { history } from './configureStore';
import * as auth from './authentification';
import './App.css';
import LoginPage from './authentification/components/LoginPage';
import NutritionPlanPage from './nutritionPlan/components/NutritionPlanPage';
import Layout from './shell/components/Layout';

type OwnProps = {
  store: Store<RootState>
};

const mapStateToProps = () => {
  return {};
};

type DispatchProps = typeof auth.actions;

type Props = OwnProps & DispatchProps;

class App extends React.Component<Props> {
  componentDidMount() {
    // this.props.login('e', 'ee');
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact={true} path="/login" component={LoginPage} />
              <Route exact={true} path="/" component={NutritionPlanPage} />
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default connect<{}, DispatchProps, OwnProps>(mapStateToProps, auth.actions)(App);
