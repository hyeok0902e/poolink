import React, { Component } from 'react';

class Category extends Component {
    state = {
        categories: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/categories/');
            const categories = await res.json();
            console.log('categories : ', categories);
            this.setState({
                categories: categories['results']
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.categories.map(category => (
                  <div key={category.slug}>
                    <h1>title : {category.title}</h1>
                    <span>api-url : {category.url}</span>
                  </div>
                ))}
            </div>
        );
    }
}

export default Category;