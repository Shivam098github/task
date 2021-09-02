import React from 'react';
import img1 from '../images/1.jpg';
import Tilt from 'react-tilt'
export default function Card() {
    return (
        <>
        <div>
            <h1>
           
            </h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                <div data-tilt>
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="card" >
                <img src='https://picsum.photos/202' className="card-img-top" alt="..."  height="200px" data-tilt/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </Tilt>
                </div>
                </div>
                <div className="col-sm-4">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="card">
                <img src="https://picsum.photos/201" className="card-img-top" alt="..." height="200px" data-tilt/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </Tilt>
                </div>
                <div className="col-sm-4">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="card" data-tilt>
                <img src="https://picsum.photos/200" className="card-img-top" alt="..." height="200px"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </Tilt>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="vanilla-tilt.js"></script>
      </>
    );
}

