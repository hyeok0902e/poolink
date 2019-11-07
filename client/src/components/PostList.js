import React from 'react';
import { Link } from 'react-router-dom';

const PostList = (props) => {
    return (
        <ul className="post_list">
            {props.list.map((post, index) => (
                <li key={index}>
                    <Link to={`/posts/${post.id}`} className="post_link">
                        <div className="post_info">
                            <strong className="post_title">
                                {post.title}
                            </strong>
                            {post.user.username}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default PostList;