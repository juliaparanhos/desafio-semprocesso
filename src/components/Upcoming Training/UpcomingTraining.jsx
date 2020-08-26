import React from 'react';
import {
  Col,
  Button,
  CardTitle, 
  CardSubtitle,
  Row
} from "reactstrap";
import "../Upcoming Training/UpcomingTraning.css";
import Oracle from "../../assets/img/Oracle.png";
import Python from "../../assets/img/Python.png";
import Android from "../../assets/img/Android.png";
import Cisco from "../../assets/img/Cisco.png";

class UpcomingTraining extends React.Component{
    render(){
        return(
            <>
           
            <Col className="up-col-1">
            <Row>
            <p className="up-title-1">Upcoming Training</p>
                <>
                    <div>
                        <img className="up-img-1" width="261" height="240" src={Oracle} alt="imagem place"/>
                        
                    </div>
                    <CardTitle className="up-cardtitle-1">Intruduction to Training Programme on Oracle </CardTitle>
                    <CardSubtitle className="up-subtitle-1"> Batch No: 23 <br/> Deadline: 12 Mar 2020 <br/><br/>Course Fee: Tk. 18000.00</CardSubtitle>
                    
                    <Button className="up-btn-1">Details</Button>
                </>
                <>
                    <div>
                        <img className="up-img-2" width="261" height="240" src={Python} alt="imagem place" />
                    </div>
                    <CardTitle className="up-cadrtitle-2">Intruduction to Training Programme on Python</CardTitle>
                    <CardSubtitle className="up-subtitle-2">Batch No: 21 <br/> Deadline: 18 Mar 2020 <br/> <br/> Course Fee: Tk. 10000.00</CardSubtitle>
                    <Button className="up-btn-2">Details</Button>
                </>
                <>
                    <div>
                        <img className="up-img-3" width="261" height="240" src={Android} alt="imagem place" />
                    </div>
                    <CardTitle className="up-cardtitle-3">Professional Android Application Development</CardTitle>
                    <CardSubtitle className="up-subtitle-3">Batch No: 01 <br/>Deadline: 22 Mar 2020 <br/><br/>Course Fee: Tk. 18000.00</CardSubtitle>
                    <Button className="up-btn-3">Details</Button>
                </>
                <>
                    <div>
                        <img className="up-img-4" width="261" height="240" src={Cisco} alt="imagem place"/>
                    </div>
                    <CardTitle className="up-cardtitle-4">Server and Internet Security Administrator</CardTitle> 
                    <CardSubtitle className="up-subtitle-4">Batch No: 06 <br/> Deadline: 23 Mar 2020 <br/><br/>Course Fee: Tk. 18000.00</CardSubtitle>
                    <Button className="up-btn-4">Details</Button>
                </>
                </Row> 
            </Col>
            </>
        )
    }
}
export default UpcomingTraining;