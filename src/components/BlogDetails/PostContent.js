import React from 'react';
import postImage from '../../assets/images/news/news-13.jpg';
import { Link } from 'react-router-dom';
import postIcon from '../../assets/images/icons/icon-4.svg';
import postIcon2 from '../../assets/images/icons/icon-5.svg'

const PostContent = () => {
    return (
        <>
            <div className="news-block-one">
                <div className="inner-box">
                    <figure className="image-box">
                        <img
                            src={postImage}
                            alt="News related to the post content"
                        />
                    </figure>
                    <div className="lower-content">
                        <div className="date">
                            16 <span>APR</span>
                        </div>
                        <ul className="post-info mb_13 clearfix">
                            <li>
                                <img src={postIcon} alt="Admin" />
                                <Link to="/blog/blog-details">Admin</Link>
                            </li>
                            <li>
                                <img src={postIcon2} alt="Comments" />0 Cmnts
                            </li>
                        </ul>
                        <h3>How to Manage Risk Monitoring Security</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cursus ornare non non massa elit rutrum. Erosie proin nibh
                            neque interdum accumsan, neque vitae. Tortor etiam sed
                            suspendisse faucibus ac volutpati mattis tortor nec. Orc
                            velit a, posuere turpis amet. Lectus lacus lectus habitasse
                            amet quam libero, and lorem. Volutpat odio maecenas viverra
                            consequat condimentum diam donec aliquet. Natoque quam id
                            vitae leo risus. Eget neque proin in dolor cursus bibendum
                            urna dictum. Aliquam gravida et proin donen maecenas quis
                            faucibus varius tristique.
                        </p>
                        <p>
                            Pulvinar dolor aliquet netus ultrices neque, mi non accumsan
                            ullamcorper. Et nunc scelerisque turpis on facilisis pretium
                            ut facilisis pharetra, ultrices. Duis imperdiet habitant
                            arcu quis. Nunc euismod odio and cursus in diam eget
                            tincidunt mauris.
                        </p>
                        <ul className="list-item clearfix">
                            <li>Platea sed fames at egestas amet feugiat laoreet</li>
                            <li>
                                Duis et enim justo, in mauris posuere dolor magnis felis
                                sapien sit egestas. Ut venenatis faucibus non sed faucibus
                                mauris ultricies.
                            </li>
                            <li>
                                Mauris donec ociis et magnis sapien etiam sapien sagittis
                                congue tempor gravida done
                            </li>
                            <li>
                                Amet minim mollit non deserunt ullamco est sit aliqua
                                dolor do amet sint.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostContent;