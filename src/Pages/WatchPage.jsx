import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingWatch from "../components/LoadingWatch";
import Error from "../components/Error";

function WatchPage(){

    const{id} = useParams();
    const[post, setPost] = useState({});
    const[isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)


    useEffect(() => {
        async function fetchPost(){
            try{
                setIsLoading(true);
                const response = await axios.get(`https://0f1d677bc08e5d50.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch(error){
                setIsError(true)
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id])

    if (isError){
        return <Error />
    }
  

    return(
        
        <main class="video_bl">
            {isLoading ? (<LoadingWatch />) : (
                <div class="container">
                <div class="video_page">
                    <img src={post.imageUrl} width="300px" />
                </div>
                <div class="video_text">
                    {post.title}
                </div>
                
                <div class="chat_block">
                    <h3 class="Video_item">
                        Lorem
                    </h3>
                    <h3 class="Video_item">
                        Lorem
                    </h3>
                    <h3 class="Video_item">
                        Lorem
                    </h3>
                    <h3 class="Video_item">
                        Lorem
                    </h3>
                    <h3 class="Video_item">
                        Lorem
                    </h3>
                    <div class="chat_enter">
                        <input type="text" placeholder="Enter Your massage" class="mas-text" />
                    </div>
                </div>
            </div>
        )}
        
    </main>
    )
}

export default WatchPage