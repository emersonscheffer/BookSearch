import React, { Component } from 'react';

import {
    Card, ButtonGroup, Button, CardHeader, CardTitle, CardText, Row, Col
} from 'reactstrap';




export class BookTitle extends Component {
  render() {
    return (
        <Row>
            <Col sm="12">
                <Card body>
                    <CardHeader>
                        <Row>
                            <Col sm="9">
                                <span>{this.props.title}</span>
                            </Col>
                            <Col sm="3">
                                <ButtonGroup className="float-right" size="sm">
                                    <Button>View</Button>
                                    <Button>Delete</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardTitle>Written By</CardTitle>
                    <Row>
                        <Col>
                        <img className="thumb" alt="Thumbnail" src="http://books.google.com/books/content?id=QCp6PQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"/>
                        </Col>
                        <Col sm="9">
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
  }
}

export default BookTitle
