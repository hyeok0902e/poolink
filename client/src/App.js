import React, { Component } from 'react';

import './App.css';

import Layout from './containers/layout';
import CategoryList from './containers/categorylist';
import PostList from './containers/postlist';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Layout>
          <CategoryList />
          <PostList />
        </Layout>
      </div>
    );
  }
}

export default App;