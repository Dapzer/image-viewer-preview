import React from 'react';
import './styles/App.css';
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"
import img6 from "./images/6.png"
import img7 from "./images/7.jpg"
import img8 from "./images/8.jpg"
import img9 from "./images/9.jpg"
import img10 from "./images/10.jpg"
import img11 from "./images/11.jpg"
import img12 from "./images/12.jpg"
import { ImageViewer } from "react-image-viewer-dv"


function App() {
  document.title = 'React Image Viewer'

  const bulkImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <h1>React Image Viewer</h1>
          <nav>
            <a href="https://github.com/Dapzer/react-image-viewer" target="_blank">GitHub</a>
            <a href="https://www.npmjs.com/package/react-image-viewer-dv" target="_blank">NpmJs</a>
          </nav>
        </div>

        <div className="content">
          {bulkImages && bulkImages.map((img) =>
            <div className="item">
              <ImageViewer>
                <img src={img} alt="Your image" />  
              </ImageViewer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
