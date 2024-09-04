
import React, {useState, useRef} from "react";
import facebook from '/src/assets/icons/facebook.svg';
import google from '/src/assets/icons/google.svg';
import linkedin from '/src/assets/icons/linkedin.svg';
import twitter from '/src/assets/icons/twitter.svg';
const Login = () =>{
      // manejar el tipo de input (password/text)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const passwordRef = useRef(null);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
        passwordRef.current.type = isPasswordVisible ? "password" : "text";
    };

    return (
        <div className="login-container">
            <div className="allformcontent">
                <div className="section_welcome">
                    <h2 className="welcome_title">Que bueno verte otra vez!</h2>
                    <p className="no_session">No tienes una cuenta? <a href="#">Registrate!</a></p>
                </div>
                <form action="#" method="post" className="login_form" id="id_login_form">
                    <div className="inputs_container">
                        <div className="input_form">
                            <label htmlFor="id_email">Email</label>
                            <input type="email" name="email" id="id_email" placeholder="nombre@ejemplo.com"/>
                        </div>
                        <div className="input_form">
                            <label htmlFor="id_password">Contraseña</label>
                            <div className="for_toggle">
                                <input type="password" name="password" id="id_password" ref={passwordRef}/>
                                <span id="toggle_password" className="toggle_password" onClick={togglePasswordVisibility}>{isPasswordVisible ? "❌" : "👁️"}</span>
                            </div>

                        </div>
                    </div>
                    <button className="button_signin">Entrar</button>
                </form>
                <div className="other_session">
                    <p>O inicia sesión con otra cuenta</p>
                    <div className="links_for_session">
                        <div className="link_icon_cont"><a href="#" className="link_social"><img src={facebook} alt="Facebook Login"/></a></div>
                        <div className="link_icon_cont"><a href="#" className="link_social"><img src={linkedin} alt="Facebook Login"/></a></div>
                        <div className="link_icon_cont"><a href="" className="link_social"><img src={twitter} alt="Facebook Login"/></a></div>
                        <div className="link_icon_cont"><a href="" className="link_social"><img src={google} alt="Facebook Login"/></a></div>
                    </div>
                </div>
            </div>
            <div className="image_container_login">
                <div className="image_circle">
                </div>
            </div>

        </div>
    )
}
export default Login