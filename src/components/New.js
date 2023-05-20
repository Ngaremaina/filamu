import React from "react";
import { Card } from "react-bootstrap";

const New = () => {
    return (
        <Card bg="dark" style={{width:"18rem"}} className="mb-2">
            <Card.Img variant="top" src=""/>
            <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>Description</Card.Text>
            </Card.Body>
        </Card>
        
    )

}

export default New