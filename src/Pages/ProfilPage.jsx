import avatar from "../assets/images/avatar.png"
import { Link } from "react-router-dom";


function ProfilPage(){
    return(
        <main class="prof-main">
        <section class="mobile-block-prof">
            <div class="mobile-block_header-prof"> 
                <div class="elem-prof">
                    Profil
                </div>
            </div>
                <div class="avatar">
                    <img src={avatar} alt="ava" width="150px" />
                </div>
                <form class="container">
                    <input type="text" placeholder="Change your nickname" class="input-block" />
                    <textarea placeholder="Your description..." class="textarea-block"></textarea>
                </form>
        </section>
    </main>
    );
}

export default ProfilPage