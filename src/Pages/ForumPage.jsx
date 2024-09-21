import { Link } from "react-router-dom"

function ForumPage(){
    return(
        <main class="main">
        <section class="mobile-block">
            <div class="mobile-block_header is-black"> 
                <div>
                    <Link to="/post" class="elem1">
                        Video
                    </Link>
                </div>
                <div>
                    <Link to="/forum" class="elem2">
                        Forum
                    </Link>
                </div>
            </div>
            <div class="all-comments-block">
                <div class="com-card">
                    <div class="container">
                        <h3 class="com-card__title">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </h3>
                        <span class="com-card__time">10:10</span>
                        <span class="com-card__name">Lorem boy</span>
                    </div>
                </div>
                <div class="com-card">
                    <div class="container">
                        <h3 class="com-card__title">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </h3>
                        <span class="com-card__time">10:10</span>
                        <span class="com-card__name">Lorem boy</span>
                    </div>
                </div>
                <div class="com-card">
                    <div class="container">
                        <h3 class="com-card__title">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </h3>
                        <span class="com-card__time">10:10</span>
                        <span class="com-card__name">Lorem boy</span>
                    </div>
                </div>  
                <div class="back">
                    <div class="writter">
                    <input type="text" placeholder="Enter Your massage" class="writter" />
                </div>
                </div>      
            </div>
        </section>
    </main>
    );
}

export default ForumPage