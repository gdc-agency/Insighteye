const CommentForm = ({ }) => {
    return (
        <div className="comment-form">
            <h3>Leave A Comments</h3>
            <form
                method="post"
                action="blog-details.html"
                className="default-form"
            >
                <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required=""
                    />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required=""
                    />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea
                    name="message"
                    placeholder="Type message"
                    defaultValue={""}
                    />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                    <button type="submit" className="theme-btn btn-one">
                    Post Comment
                    </button>
                </div>
                </div>
            </form>
            </div>
    )
}

export default CommentForm;