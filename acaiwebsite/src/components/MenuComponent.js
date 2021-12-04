import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";


class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    alert("Added to cart: " + JSON.stringify(values));
  }

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Order Now:</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <Control.select
                  id="quantity"
                  name="quantity"
                  model=".quantity"
                  className="form-control"
                >
                  <option name="quantity" disabled selected value> Select... </option>
                  <option name="quantity">1</option>
                  <option name="quantity">2</option>
                  <option name="quantity">3</option>
                  <option name="quantity">4</option>
                  <option name="quantity">5</option>
                </Control.select>
              </div>

              <div className="form-group">
                <label htmlFor="comments">Special Instructions</label>
                <Control.textarea
                  id="text"
                  name="text"
                  model=".text"
                  className="form-control"
                  placeholder="Comments"
                >
                </Control.textarea>

                <Errors
                  className="text-danger"
                  show="touched"
                  model=".text"
                />
              </div>

              <div className="form-group">
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </div>
            </LocalForm>
          </ModalBody>
        </Modal>

        <Button outline color="secondary" size="sm" onClick={this.toggleModal}>
          <i className="fa fa-light fa-cart-arrow-down fa-lg" />
           Add to Cart
        </Button>
        {""}
      </React.Fragment>
    );
  }
}

function RenderAcai({ acai }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={acai.image} alt={acai.name} />
        <CardBody>
          <CardText>{acai.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>~ Ingredients ~</h4>
        {comments.map((comments) => (
          <div key={comments.id}>
            {comments.text}
          </div>
        ))}
        <CommentForm />
      </div>
    );
  }
  return <div />;
}

function MenuInfo(props) {
  if (props.acai) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.acai.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.acai.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderAcai acai={props.acai} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default MenuInfo;