import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import PostList from '../components/PostList';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this._getList();
    }

    async _getList() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/posts/');
            const posts = await res.json();
            console.log('json : ', posts)
            this.setState({
                posts: posts['results']
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <Header />
                <PostList list={this.state.posts} />
                <Footer />
            </div>
        )
    }
}

export default Main;