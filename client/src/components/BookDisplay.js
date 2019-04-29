import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,

    Container,

    NavLink


} from 'reactstrap';
import { addBook } from '../actions/bookActions'
import { sendSearch, getSearchArr } from '../actions/bookActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class BookDisplay extends Component {


    state = {
        modal: false,
        title: ''
    }

    componentDidMount(){
      this.props.getSearchArr();
      console.log(this.props.getSearchArr())
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }
    
    onChange = (e) => {
        this.setState({ [e.target.title]: e.target.value })
      }

    onSubmit = e => {
        e.preventDefault();

        if(this.state.title === ''){
            console.log(' =-=-=-=-=-=-=- =-=-=-=- ==-=-=  empty search field')
        } else {

          const searchData = {
            search: this.state.title
          }

        this.props.sendSearch(searchData);
       
    }

    
    this.toggle();

}

  render() {
   
    return (
      <div>

        <Container className="text-center">
          <Button color="dark"
        style={{marginBottom: '2rem'}}
        onClick={this.toggle}
        >
          Search Book
        </Button>

        <h4>You are searching for the book/author " {this.state.title} "</h4>
        
        <p>Click on Show List button to generate the list of books</p>

        <NavLink href={'/'}>
          <Button color="dark"
          style={{marginBottom: '2rem'}}
          // onClick={this.showlist}
          >
            Show List
          </Button>
        </NavLink>
        </Container>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add to Book List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="book">
                  Book
                </Label>
                <Input
                  type="text"
                  title="title"
                  id="book"
                  placeholder="Search book"
                  onChange={this.onChange}
                >
                </Input>
                <Button

                  color="dark"
                  style={{marginTop: '2rem'}}
                  block

                >
                  Search Book
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>

      </div>

      
    )
  }
}

BookDisplay.propTypes = {
  getSearchArr: PropTypes.func.isRequired,
  booko: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  booko: state.book,
  searcho: state.sea
});


export default connect(mapStateToProps, { addBook, sendSearch, getSearchArr })(BookDisplay)

