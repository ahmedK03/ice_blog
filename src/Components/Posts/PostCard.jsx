import { Fragment,useState } from 'react';
import './PostCard.css';


const PostCard = ({ post }) =>{
    const [isHovered, setIsHovered] =useState(false);
    const setHovered = () => {setIsHovered(!isHovered)};
    return (
        <Fragment>
            <article className={`new-post ${post.title}`} >
                <div className="post-item mt-3">
                    <div className="image-wrapper">
                        <img src="./together.jpg" alt="" />
                    </div>
                    <div className="content-wrapper">
                        <div className="categories-wrapper d-flex justify-content-center gap-4">
                            <a href="/" className="mt-4 text-capitalize">cate 1 </a>
                            <a href="/" className="mt-4 text-capitalize">cate 2 </a>
                        </div>

                        <h2 className="py-3 text-center">
                            <a href="/"
                            className={isHovered ? 'text-hover' : 'text-info'}
                            onMouseEnter={setHovered}
                            onMouseLeave={setHovered} >{post.title}</a>
                        </h2>

                        <div className="author-wrapper d-flex justify-content-center gap-4">
                            <span>By Auther</span>
                            <span className="date">date</span>
                        </div>
                        <div className="excerpt text-center py-3">
                            <p className="text-muted">{post.content}</p>
                        </div>
                        <div className="read-more">
                            <button className="btn btn-primary rounded">read more</button>
                        </div>
                    </div>
                </div>
            </article>
        </Fragment>
    );
};

export default PostCard;