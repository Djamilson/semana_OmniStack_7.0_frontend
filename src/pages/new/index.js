import React, { Component } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import Upload from '../../components/Upload';

class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data);
    console.log('Poste cadastrado com sucesso!');
    this.props.history.push('/');
  };

  handleInputChange = (e) => {
    console.log('entrada: ', e.target.name);
    console.log('value: ', e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpload = (files) => {
    const meufile = files.map(file => file);

    this.setState({
      image: meufile[0],
    });
  };

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <Upload onUpload={this.handleUpload} />

        <input
          type="text"
          name="author"
          onChange={this.handleInputChange}
          placeholder="Autor do post"
          value={this.state.author}
        />

        <input
          type="text"
          name="place"
          placeholder="Local do post"
          value={this.state.place}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          value={this.state.description}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          value={this.state.hashtags}
          onChange={this.handleInputChange}
        />
        <button type="submit">Criar</button>
      </Container>
    );
  }
}

export default New;
