import React from 'react'; 
import Header from '../Components/HomeScreen/Header';
import PinterestLayout from '../Components/Gallery/PinterestLayout';
import Footer from '../Components/HomeScreen/Footer';

function Gallery() {

    return (
        <div className="app">
            <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
            <Header />
            <div className="app__container">
                <div className="background--black">
                    <div className="grid-container">
                        <h1 className='page-header gallery-header'>GALLERY</h1>
                        
                        <PinterestLayout/>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Gallery;