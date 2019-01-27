import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";
import './postShow.css'

class Show extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }







    render() {

        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div className="container">
                <div class="card">
                    <div className="card-body row">
                        <div className="col-10">

                            <h4>WTF!!!!  <span role="img" aria-label="sheep">😖🥺😢😭</span> </h4>

                        </div>

                        <div className="col-2">

                            <button className="btn btn-md btn-danger" onClick={this.onDeleteClick.bind(this)}>
                                <i class="fas fa-trash" />  <b>delete</b>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3>{post.title}</h3>
                        <h6>Categories: {post.categories}</h6>
                        <p>{post.content}</p>

                        <Link to="/">HOME</Link>
                    </div>
                </div>
            </div>


        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
  }
  
  export default connect(mapStateToProps, { fetchPost, deletePost })(Show);
  