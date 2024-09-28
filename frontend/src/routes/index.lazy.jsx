import { createLazyFileRoute } from "@tanstack/react-router";
import '../assets/styles/style_home.scss';
import image_back from '../assets/images/image_back.jpg';
import image_back2 from '../assets/images/image_back2.jpg'
import image_back3 from '../assets/images/image_back3.jpg'
import Header from "../components/Header";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index(){
    const images = [image_back, image_back2, image_back3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeState, setFadeState] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeState(false); 

            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambia la imagen
                setFadeState(true); 
            }, 1000); 

        }, 5000); 
        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <div className="home-wrapper">
            <Header/>
            <div className="home_container">
                <div className={`image_background_home ${fadeState ? 'fade-in' : 'fade-out'}`}>
                    <img src={images[currentImageIndex]} alt="pic_background" className="image_back" />
                </div>
                <div className="info_web">
                    <h1 className="title_welcome">Find Your Idea Roommate</h1>
                    <span className="welcome_span">Find your roommate</span>
                    <p className="welcome_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ipsa aperiam aspernatur veritatis expedita tempora pariatur, qui, illum libero error dicta, atque nulla ab necessitatibus doloremque amet impedit tenetur eligendi.</p>
                    <button className="button_started">Iniciar</button>
                </div>
            </div>
            <div className="recomendation_roommate">
                    <div className="rec_room"></div>
                    <div className="rec_room"></div>
                    <div className="rec_room"></div>
                    <div className="rec_room"></div>
            </div>
        </div>
    )
}