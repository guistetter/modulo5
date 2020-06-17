import React, { Component } from "react";
import { FaGithubAlt, FaPlus, FaSpinner } from "react-icons/fa";
import { Form, Container, SubmitButton} from "./styles";

import api from "../../services/api"

export default class Main extends Component {
  state = {
    newRepo: "",
    repositories:[],
    loading: false,
  };

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
   this.setState({loading: true})
    const { newRepo, repositories } = this.state
    const response = await api.get(`/repos/${newRepo}`)
    console.log(response.data)
    const data = {
      name: response.data.full_name
    }
    this.setState({repositories:[...repositories,data],
    newRepo:"",
    loading: false
    })
  };
  render() {
    const { newRepo, loading } = this.state;
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

          <SubmitButton loading={loading}>
            {loading ? <FaSpinner color="#FFF" size={14}/> : 
            <FaPlus color="#FFF" size={14} />  }
            
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
