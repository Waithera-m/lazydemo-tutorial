import React from 'react';
import data from './data';
import LazyLoad from 'react-lazyload';
import './App.css';


const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
)


const Post = ({id, title, body}) => (
  <div>
    <LazyLoad once={true} placeholder={`https://picsum.photos/id/${id}/5/5`}>
      <div className="card flex-row flex-wrap mb-2 shadow shadow-lg">
        <div className="card-header border-0">
          <div className="img-fluid">
            <img src={`https://picsum.photos/id/${id}/200/200`} alt="..."/>
          </div>
        </div>
        <div className="card-block px-2">
          <h4 className="card-title">{title}</h4>
          <p className="card-body">{body}</p>
        </div>
      </div>
    </LazyLoad>
  </div>
);

function App() {
  return (
    <div className="App">
      <h2 className="display-4">LazyLoad Demo</h2>
      <div className="container">
        {data.map(post => (
          <LazyLoad key={post.id} height={100} offset={[-100, 100]} placeholder={<Loading/>}>
              <Post key={post.id} {...post} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default App;
