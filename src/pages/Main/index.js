import React, { Component } from "react";
import { FaGithubAlt, FaPlus } from "react-icons/fa";
import { Form, Container, SubmitButton } from "./styles";
export default class Main extends Component {
  state = {
    newRepo: "",
  };
  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newRepo);
  };
  render() {
    const { newRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositorios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={newRepo}
            onChange={this.handleInputChange}
            placeholder="Adicionar Repositorio"
          />

          <SubmitButton>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
