import React from 'react';
import {
Row,
Col,
Button,
} from "reactstrap";
import "../Slider/slider.css";
import Imag1 from "../../assets/img/photo-1.png";
import ImagGroup from "../../assets/img/Group.png";
import Circle1 from "../../assets/img/slider-component-circle-1.svg";
import Circle2 from "../../assets/img/slider-component-circle-2.svg";
import Vector1 from "../../assets/img/slider-vector-1.svg";
import Vector2 from "../../assets/img/slider-vector-2.svg";
import Vector3 from "../../assets/img/slider-vector-3.svg";
import Vector4 from "../../assets/img/slider-vector-4.svg";

class Slider extends React.Component{
    render(){
        return( 
            <>
                <Col md="12" className="slider-col-1">
                    <Col>
                    <Row>
                        <div>
                            <p className="slider-title-1">Website Design Free Course</p>
                            <p className="slider-subtitle-1">One of the activities of Bangladesh Computer Council (BCC) is to develop trained manpower in the field of ICT through ICT training.</p>
                            <Button className="slider-button-1">Enroll Now</Button>
                            {/* Component-circle-yellow */}
                            <img className="slider-component-circle-1" width="130" height="158" src={Circle1} alt="group circle yellow" />

                            {/*Vector-1*/}
                            <img className="slider-component-1" src={Vector1} width="13" height="13" alt="vector 1" />
                            
                            {/*Vector-2 green */}
                            <img className="slider-component-2" src={Vector2} width="74" height="74" alt="vector 2"/>
                            
                            {/* Vector-3 yellow */}
                            <img className="slider-component-3" src={Vector3} width="74" height="74" alt="vector 3"/>
                        </div>
                        
                        <div>
                            <img className="slider-background" src={Imag1} alt="landscape"/>
                            <img className="slider-image" src={ImagGroup} alt="landscape"/>

                            {/* Component-circle-blue*/}
                            <img className="slider-component-circle-2" src={Circle2} width="130" height="158" alt="component circle blue"/>

                            {/*Vector-4*/}
                            <img src={Vector4} className="slider-component-4" width="25" height="25" alt="vector 4"/>

                        </div>
                    </Row>
                    </Col>
      </Col>
            </>
        );
    }
}

export default Slider;