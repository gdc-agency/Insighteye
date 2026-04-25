import { Link } from 'react-router-dom';

const Tags = () => {
    return (
        <div className="post-tags mb_50">
            <ul className="tags-list clearfix">
                <li>
                    <p>Tags:</p>
                </li>
                <li>
                    <Link to="#">Activities</Link>
                </li>
                <li>
                    <Link to="#">Department</Link>
                </li>
                <li>
                    <Link to="#">City</Link>
                </li>
                <li>
                    <Link to="#">Certificate</Link>
                </li>
            </ul>
        </div>
    );
}

export default Tags;