import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';


class PostDetail extends Component{
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            user: {}
        }
    }

    async componentDidMount() {
        this._getPost();
    }

    async _getPost() {
        try {
            const post_id = await this.props.match.params.post_id;
            const res = await fetch(`http://127.0.0.1:8000/api/posts/${post_id}`);
            const post = await res.json();

            this.setState({
                post: post,
                user: post.user
            });
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            
            <div>
                <Header />
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.user.username}</p>
                    <p>{this.state.post.content}</p>
                <Footer />
            </div>
        )
    }
}

export default PostDetail