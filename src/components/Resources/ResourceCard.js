import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdFileDownload } from "react-icons/md";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ResourceCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <OverlayTrigger
          overlay={
            props.disable ? (
              <Tooltip id="tooltip-disabled">Login to Access Premium Content</Tooltip>
            ) : (
              <></>
            )
          }
        >
        <span className="d-inline-block">
        <Button
            variant="primary"
            href={props.downloadlink}
            target="_blank"
            disabled={props.disable}
            style={{ marginLeft: "10px" }}
          >
            <MdFileDownload /> &nbsp;
            {"Download"}
          </Button>
          </span>
        </OverlayTrigger>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

      </Card.Body>
    </Card>
  )
}

export default ResourceCard