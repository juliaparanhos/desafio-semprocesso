import React from 'react';
import {
  Row,
  Col,
} from "reactstrap";
import "../ED Msg/Edmsg.css"
import Imag2 from "../../assets/img/photo-2.png";
import Circle from "../../assets/img/msg-component-circle.svg";
class Edmsg extends React.Component{

    render(){
        return(
            <>
                <Col className="msg-col-1">
                <Row>
                    <div>

                        {/*retângulo azul */}
                        <svg className="msg-background-blue" width="361" height="355" viewBox="0 0 361 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="361" height="355" rx="4" fill="url(#paint0_linear)" fill-opacity="0.35"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="4.63023e-06" y1="177" x2="361" y2="191" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#84EEEB"/>
                        <stop offset="1" stop-color="#CCD1FF"/>
                        </linearGradient>
                        </defs>
                        </svg>

                        {/* retangulo branco */}
                        <svg  className="msg-background-withe" width="361" height="355" viewBox="0 0 361 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="361" height="355" rx="4" fill="white"/>
                        </svg>

                        {/* Image */}
                        <img className="msg-image" src={Imag2} alt="imagem CEO"/>    
                        
                        {/* Component-circle-white */}                    
                        <img className="msg-component-circle" src={Circle} width="74" height="90" alt="circle component" />
                        
                    </div>
                        {/* informações */}
                    <div>
                        <p className="msg-title-1">Message from Executive Director (MAQs)</p>
                        <p className="msg-subtitle-1"> Hi, I am fortunate  to have a very strong team of high skilled professionals who support me to carry forward the mission of  MAQs.</p>
                        <p className="msg-text">We have gone through a serious transformation recently to run our business treating everyone coming to us a customer. This means we try to ensure “customer service” in whatever we do and are always keen to see a happy smile in all our customer’s face....</p>
                        <p className="msg-subtext"> {/*color é gradient precisa mudar*/}Read More</p>
                    </div>
                </Row>
                </Col>
            </>
        )
    }
}

export default Edmsg;