import React from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import _ from 'lodash'
import { fetchPosts } from "../actions"

import './postIndex.css'

class Index extends React.Component {


    componentDidMount() {
        this.props.fetchPosts();
      }
    
      renderPosts() {
        return _.map(this.props.posts, post => {
          return (
            <li className="list-group-item" key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          );
        });
      }

    render() {
        return (

            <div className="container">
                <div class="card">
                    <div className="card-body row">
                        <div className="col-10">
                       
                            <h4>LOL!!!!  <span role="img" aria-label="sheep">😜😝😂😆</span> </h4>
                           
                        </div>

                        <div className="col-2">
                        <Link className="btn btn-primary" to="/posts/new">
                        <button className="btn btn-md btn-primary">
                                <i class="fas fa-feather-alt" />  <b>new</b>
                        </button>
                         </Link>

                            
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <ul class="list-group">
                        {this.renderPosts()}
                        </ul>

                    </div>
                </div>
            </div>




        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
  }
  
  export default connect(mapStateToProps, { fetchPosts })(Index);
  