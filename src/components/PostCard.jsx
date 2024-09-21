import { Link } from "react-router-dom";

function PostCard({post}) {
    return(
        <div class="category-item">
            <Link to={`/watch/${post.id}`}>
            <img src={post.imageUrl} class="vidi" alt="video"/>
            </Link>
            <span class="text_link">{post.title}</span>
        </div>
    );
}

export default PostCard;