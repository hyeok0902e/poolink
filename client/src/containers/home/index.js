import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import './styles.scss';


class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            { this.props.children ?
              this.props.children
              : 
              <NavLink to="/posts" className="post-link">
                <button>게시글 보러가기</button>
              </NavLink>
            }
            </Col>
        </Row>
      </div>
    )
  }
}

export default HomeContainer;