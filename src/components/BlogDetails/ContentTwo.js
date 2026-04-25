import ContentImage1 from '../../assets/images/news/news-19.jpg'
import ContentImage2 from '../../assets/images/news/news-18.jpg'

const ContentTwo = () => {
    return (
        <div className="content-two mb_45">
            <div className="image-box mb_40">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                        <figure className="image">
                            <image
                                src={ContentImage1}
                                alt="Post Image"
                            />
                        </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                        <figure className="image">
                            <image
                                src={ContentImage2}
                                alt="Post Image"
                            />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="text-box">
                <h3>When you pay your credit card bill</h3>
                <p>
                    Pulvinar dolor aliquet netus ultrices neque, mi non accumsan
                    ullamcorper. Et nunc scelerisque turpisdi facilisis pretium ut
                    facilisis pharetra, ultrices. Duis imperdiet habitant arcu
                    quis. Nunc euismod odio ani cursus in diam eget tincidunt
                    mauris. Volutpat odio maecenas viverra consequat condimentum
                    diam donec aliquet. Natoque quam id vitae leo risus. Eget
                    neque proin in dolor cursus bibendum
                </p>
            </div>
        </div>
    )
}

export default ContentTwo;