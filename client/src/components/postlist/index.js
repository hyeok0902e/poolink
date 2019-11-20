import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { Container, Button, Typography, CircularProgress, Paper, Table, TableHead, TableRow, TableCell, TableBody, Hidden } from '@material-ui/core';
import './styles.css';


class PostList extends Component {
  state = {
    currentPage: 1,
    perPage: 15
  }

  handleClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    });
  } 

  btnHandle = () => {
    this.props.history.push('/create');
  }

  render() {
    const {
      posts,
      isAuthenticated,
    } = this.props;
    
    const currentPage = this.state.currentPage;
    const perPage = this.state.perPage;

    const indexLastPost = currentPage * perPage;
    const indexFirstPost = indexLastPost - perPage;
    const currentPosts = posts.slice(indexFirstPost, indexLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / perPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button key={number} id={number} onClick={this.handleClick}>{number}</button>
      );
    });

    const currentUser = localStorage.getItem('username')
    
    const postCreateBtn = (isAuthenticated !== false || currentUser) ? (
      <Button 
        variant='outlined'
        size='small'
        onClick={this.btnHandle}
        >
        ADD POST
      </Button>
    ) : (
      <Typography 
        variant='subtitle1'
        align='center'
        component='p'
        >
        회원만 글을 쓸 수 있습니다.
      </Typography>
    )

    const postList = posts.length ? (
        <Paper className='postWrapper'>
          <Table className='postTable'>
            <TableHead>
              <TableRow>
                <TableCell>제목</TableCell>
                <Hidden xsDown>
                  <TableCell align="center">에디터</TableCell>
                </Hidden>
                <TableCell align="center">날짜</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentPosts.map(post => {
                return(
                  <TableRow>
                  <TableCell>
                    <Link to={'/' + post.id} className="Link">{post.title}</Link>
                  </TableCell>
                  <Hidden xsDown>
                    <TableCell width='10%' align="center">{post.user.username}</TableCell>
                  </Hidden>
                  
                  <TableCell width='10%' align="center">{moment(post.created_at).format('MM.DD')}</TableCell>
                </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
    ) : (
      <Container maxWidth='sm' align='center'>
        <CircularProgress className='progress'/>
      </Container>
    )
    
    return (
      <Container maxWidth='lg'>
        <Container
          align='center'
          maxWidth='lg'>
          {postCreateBtn}
        </Container>
        {postList}
        <ul id="page-numbers" align='center'>
          {renderPageNumbers}
        </ul>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(
  mapStateToProps,
  null,
)(PostList);
