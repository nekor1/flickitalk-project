import { Link } from "react-router-dom";
import testIcon from "../assets/images/sign-up.png"


function LoginPage(){
    return(
        <main class="main_reg">
            <div class="sign-but">
                <img src={testIcon} alt="Login.button" width={200}/>
            </div>
            <section class="reg_main">
                <div class="reg-block">
                    <div class="reg_enter">
                        <input type="email" placeholder="Enter Your @Emlail" class="elem-text" />
                    </div>
                    <div class="reg_enter">
                        <input type="Nikname" placeholder="Enter Your Nickname" class="elem-text" />
                    </div>
                    <div class="reg_enter">
                        <input type="password" placeholder="Enter Your Password" class="elem-text" />
                    </div>
                    <div class="btn-acc">
                        <Link to="/profil" class="bcg-btn">
                            Create account
                        </Link>                 
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LoginPage;