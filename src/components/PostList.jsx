import PostCard from "./PostCard";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import { useEffect, useState } from "react";
import Error from "./Error";


function PostList() {

    const[posts, setPosts]=useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    useEffect(() =>{
        async function fetchPosts() {
            try{
                setIsLoading(true);
                const response = await axios.get('https://0f1d677bc08e5d50.mokky.dev/post');
                setPosts(response.data);
            } catch(error){
                setIsError(true)
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);
    if (isError){
        return <Error />
    }
  


    return(
        <div class="video_block">
            {isLoading ? (<LoadingPost />) : (
                <>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </>
            )}
        </div>
    );
}

export default PostList;