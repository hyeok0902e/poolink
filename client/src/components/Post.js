import React, { Component } from 'react';

class Post extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/posts/');
            const posts = await res.json();
            console.log('posts : ', posts);
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
                {this.state.posts.map(post => (
                  <div key={post.id}>
                    <h1>title: {post.title} | api-url : {post.url}</h1>
                    <p>username : {post.user.username}</p>
                    <span>{post.content}</span>
                  </div>
                ))}
            </div>
        );
    }
}

export default Post;