import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 
{ Container,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia,
} from '@material-ui/core';
import './styles.css';

class Home extends Component {
  render() {
    console.log(this.props.posts)
    return (
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {this.props.posts.map(post => (
            <Grid item key={post.id} xs={12} md={6}>
              <CardActionArea component='a' href={post.id}>
                <Card className='card'>
                  <div className='cardDetails'>
                    <CardContent>
                      <Typography component='h2' variant='h5'>
                        {post.title}
                      </Typography>
                      <Typography variant='subtitle1' color='textSecondary'>
                        {moment(post.created_at).fromNow()}
                      </Typography>
                      <Typography variant='subtitle1' paragraph>
                        {post.content}
                      </Typography>
                      <Typography variant='subtitle1' color='primary'>
                        read more...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className='cardMedia'
                      image='./logo512.png'
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
          
        </Grid>
      </Container>
    )  
  } 
}

export default Home;