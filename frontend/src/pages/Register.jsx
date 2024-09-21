import React, {useState, useRef} from "react";
import '../assets/styles/style_registro.scss'
import { useColorMode } from "@chakra-ui/react";



const Registro = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const passwordRef = useRef(null);
  
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
        passwordRef.current.type = isPasswordVisible ? "password" : "text";
    }
    const {colorMode} = useColorMode();
    const backgroundColor = colorMode === 'light' ? 'gray.100' : 'gray.700';
    const textColor = colorMode === 'light' ? 'black' : 'white';
    return (
        <div className="registro-wrapper">
            <div className="registro-container">

                <div className="image_container_registro">
                        <div className="image_circle"></div>
                </div>
                <div className="allformcontent">
                    <div className="section_welcome">
                        <h2 className="welcome_title">Registrarse</h2>
                        <p className="is_session">Ya tienes una cuenta? <a href="#">Inicia sesión!</a></p>
                    </div>
                    <form action="#" method="post" id="id_registro_form" className="registro_form">
                        <div className="inputs_container">
                            <div className="input_form">
                                <label htmlFor="id_usuario">Usuario</label>
                                <input type="text" name="usuario" id="id_usuario" bg={backgroundColor} color={textColor}/>
                            </div>
                            <div className="input_form">
                                <label htmlFor="id_email">Email</label>
                                <input type="email" name="email" id="id_email" placeholder="nombre@ejemplo.com" bg={backgroundColor} color={textColor}/>
                            </div>
                            <div className="input_form">
                                <label htmlFor="id_password">Contraseña</label>
                                <div className="for_toggle">
                                    <input type="password" name="password" id="id_password" ref={passwordRef} bg={backgroundColor}/>
                                    <span id="toggle_password" className="toggle_password" onClick={togglePasswordVisibility}>{isPasswordVisible ? "❌" : "👁️"}</span>
                                </div>
                            </div>
                        </div>
                        <button className="button_signin">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registro;