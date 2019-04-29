import React, { Component } from 'react'

import {
    Button,
    
    Card,
    ButtonGroup,
    CardHeader,
    CardTitle,
    CardText,
    Row,
    Col,

    NavLink


} from 'reactstrap';

export class TileSearch extends Component {
  render() {
    return (
      <div>

<Row key={this.props._id}>
            <Col sm="12">
                <Card body>
                    <CardHeader>
                        <Row>
                            <Col sm="9">
                                {this.props.title}
                            </Col>
                            <Col sm="3">
                                <ButtonGroup className="float-right" size="sm">

                                <NavLink href={this.props.linkToBook}>
                                
                                    <Button>View</Button>

                                </NavLink>
                                <NavLink>
                                <Button onClick={this.props.btndelete}>Delete</Button>
                                </NavLink>
                                    
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardTitle>Written By {this.props.authors}</CardTitle>
                    <Row>
                        <Col>
                        <img className="thumb" alt="Thumbnail" src={this.props.imageThumb}/>
                        </Col>
                        <Col sm="9">
                            <CardText> {this.props.description} </CardText>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        
      </div>
    )
  }
}

export default TileSearch
