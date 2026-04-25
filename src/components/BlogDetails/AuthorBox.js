import authorImage from '../../assets/images/news/author-2.jpg'

const AuthorBox = ({ }) => {
    return (
        <div className="author-box mb_50">
            <figure className="author-thumb">
                <img
                    src={authorImage}
                    alt="Post Image"
                />
            </figure>
            <h4>Sandra Bullock</h4>
            <span className="designation">About Author</span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit
                purus tempor dui pharetra consequat nibh elit urna interdum
                viera quam.
            </p>
        </div>
    )
}

export default AuthorBox;