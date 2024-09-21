import { Link } from "react-router-dom";
import PostList from "../components/PostList";



function PostDetailPage(){
    return(
        <main className="main2">
        <section class="mobile-block">
            <div class="mobile-block_header is-black"> 
                <Link to="/post" class="elem1">
                    Video
                </Link>
                <Link to="/forum" class="elem2">
                    Forum
                </Link>
            </div>
            <div class="form-header is-black">
                <input type="email" class="elem3" placeholder="Search..." />
                <button class="elem4">
                    create+
                </button>
            </div>
            <PostList />
            {/* <div class="container-sec">
                <div class="video_block">
                    <div class="category-item">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/archive/6/6b/20210505175821%21NyanCat.gif" class="vidi" alt="video" />
                        <span class="text_link">Video</span>
                    </div>
                    <div class="category-item">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/archive/6/6b/20210505175821%21NyanCat.gif" class="vidi" alt="video" />
                        <span class="text_link">Video</span>
                    </div>
                    <div class="category-item">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/archive/6/6b/20210505175821%21NyanCat.gif" class="vidi" alt="video" />
                        <span class="text_link">Video</span>
                    </div>
                    <div class="category-item">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/archive/6/6b/20210505175821%21NyanCat.gif" class="vidi" alt="video" />
                        <span class="text_link">Video</span>
                    </div>
                    <div class="category-item">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/archive/6/6b/20210505175821%21NyanCat.gif" class="vidi" alt="video" />
                        <span class="text_link">Video</span>
                    </div>
                    <div class="category-item">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/archive/6/6b/20210505175821%21NyanCat.gif" class="vidi" alt="video" />
                        <span class="text_link">Video</span>
                    </div>
                    <div class="category-item">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/archive/6/6b/20210505175821%21NyanCat.gif" class="vidi" alt="video" />
                        <span class="text_link">Video</span>
                    </div>
                    <div class="category-item">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/archive/6/6b/20210505175821%21NyanCat.gif" class="vidi" alt="video" />
                        <span class="text_link">Video</span>
                    </div>
                    
                </div>
            </div> */}
        </section>
        </main>

    );
}


export default PostDetailPage