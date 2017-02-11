import React, { Component } from 'react';
import { Link } from 'react-router'
import { Layout, Navigation, Content } from 'react-mdl';
import NavigationBar from './components/NavigationBar';

export default class App extends Component {
  renderNavigation = () => (
    <Navigation>
      <Link to="/">Home</Link>
    </Navigation>
  );

  renderHeader = () => (
    <NavigationBar
      title="Pouchgram"
    >
      {this.renderNavigation()}
    </NavigationBar>
  );

  render() {
    return (
      <Layout fixedHeader>
        {this.renderHeader()}
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
};
