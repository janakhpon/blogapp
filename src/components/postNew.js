import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createPost } from "../actions"
import './postNew.css'

class New extends React.Component {

    myrenderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;


        return (
            <div className={className}>

                <label for={field.id}>{field.label}</label>
                <input type="text" className="form-control" id={field.id} {...field.input} />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push("/");
        });
    }


    render() {

        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                label="Post title"
                                name="title"
                                component={this.myrenderField}
                            />
                            <Field
                                label="Post categories"
                                name="categories"
                                component={this.myrenderField}
                            />
                            <Field
                                label="Post Content"
                                name="content"
                                component={this.myrenderField}
                            />
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link to="/" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}


function validate(values) {
    // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: "PostsNewForm"
})(connect(null, { createPost })(New));
