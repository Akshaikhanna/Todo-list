import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, FormControl, InputGroup, ListGroup } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: " ",
      list: []
    }
  }

  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  addItem() {
    if (this.state.userInput !== '') {
      const userInput = {
        id: Math.random,
        value: this.state.userInput
      };
      const list = [...this.state.list];
      list.push(userInput);

      this.setState({
        list,
        userInput: ""
      });
    }
  }

  deleteItem(){
    if (this.state.userInput === ''){
      const userInput = {
        value: this.state.userInput
      };
      const list = [...this.state.list];
      list.splice(userInput);
      this.setState({
        list,
        userInput:" "
      });
    }
  }

  render() {
    return (
      <Container>
        <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>TODO LIST
        </Row>

        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3" >
              <FormControl  placeholder="Enter the message" onChange = {item => this.updateInput(item.target.value)}/>
             
                <Button variant="Dark" size="lg" onClick={(e) => {e.preventDefault(); this.addItem()} }>Add</Button>
             
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <ListGroup>
             {this.state.list.map(item => {
                return (<ListGroup.Item variant='dark' key={item.id} action onClick={() => this.deleteItem(item.id)}>
                {item.value}
                </ListGroup.Item>
                )
              })} 
            </ListGroup>
            <div>
              <button onClick={(e) => {e.preventDefault(); this.deleteItem()}}>Delete</button>
            </div>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;