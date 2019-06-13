import React, { Component } from 'react';
import io from 'socket.io-client';
import more from '../../assets/images/more.svg';
import like from '../../assets/images/like.svg';
import comment from '../../assets/images/comment.svg';
import send from '../../assets/images/send.svg';
import { Main, Image, Footer } from './styles';

import api from '../../services/api';

class Feed extends Component {
  state = {
    feed: [],
  };

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get('posts');
    this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:3333');

    console.log('==> <==', socket);
    socket.on('post', (newPost) => {
      console.log('==> Entrou newPost <==', newPost);

      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    socket.on('like', (likedPost) => {
      console.log('==> Entrou likedPost <==', likedPost);

      this.setState({
        feed: this.state.feed.map(post => (post._id === likedPost._id ? likedPost : post)),
      });
    });
  };

  handleLike = (id) => {
    api.post(`/posts/${id}/like`);
  };

  render() {
    return (
      <Main>
        {this.state.feed.map(post => (
          <article key={post._id}>
            <head>
              <div>
                <span>{post.author}</span>
                <p>{post.place}</p>
              </div>
              <img src={more} alt="Mais" />
            </head>

            <Image>
              <img src={`http://localhost:3333/files/${post.image}`} alt="Mais" />
            </Image>

            <Footer>
              <div>
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="" />
                </button>

                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>
              <strong>{post.likes}</strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </Footer>
          </article>
        ))}
      </Main>
    );
  }
}

export default Feed;
