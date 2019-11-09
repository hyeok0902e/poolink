// import React, { Component } from 'react';
// import Nav from './components/Nav';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
// import Post from './components/Post';
// import Category from './components/Category';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       displayed_form: '',
//       logged_in: localStorage.getItem('token') ? true : false,
//       username: ''
//     };
//   }

//   componentDidMount() {
//     if (this.state.logged_in) {
//       fetch('http://localhost:8000/api/users/', {
//         headers: {
//           Authorization: `JWT ${localStorage.getItem('token')}`
//         }
//       })
//         .then(res => res.json())
//         .then(json => {
//           this.setState({ username: json.username });
//         });
//     }
//   }

//   handle_login = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/api/users/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => {
//         if (res.status < 500) {
//           return res.json().then(data => {
//             return {status: res.status, data};
//           })
//         } else {
//           console.log('Server error!');
//           throw res;
//         }
//       })
//       .then(res => {
//         if (res.status === 200 || res.status === 201) {
//           return res.data;
//         } else {
//           alert('Not allowed!');
//           throw res.data
//         }
//       })
//       .then(json => {
//         localStorage.setItem('token', json.token);
//         console.log('data : ', json);
//         this.setState({
//           logged_in: true,
//           displayed_form: '',
//           username: json.username
//         });
//       });
//   };

//   handle_signup = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/api/users/register/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => {
//         if (res.status < 500) {
//           return res.json().then(data => {
//             return {status: res.status, data};
//           })
//         } else {
//           console.log('Server error!');
//           throw res;
//         }
//       })
//       .then(res => {
//         if (res.status === 200 || res.status === 201) {
//           return res.data;
//         } else if (res.status === 403 || res.status === 401) {
//           alert('Not allowed!')
//           throw res.data;
//         } else {
//           alert('Already existed email!');
//           throw res.data
//         }
//       })
//       .then(json => {
//         localStorage.setItem('token', json.token);
//         this.setState({
//           logged_in: true,
//           displayed_form: '',
//           username: json.username,
//         });
//       });
//   };

//   handle_logout = () => {
//     localStorage.removeItem('token');
//     this.setState({ logged_in: false, username: '' });
//   };

//   display_form = form => {
//     this.setState({
//       displayed_form: form
//     });
//   };

//   render() {
//     let form;
//     switch (this.state.displayed_form) {
//       case 'login':
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        POOLINK
      </div>
    );
  }
}

export default App;