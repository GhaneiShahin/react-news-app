import React from "react";
import "./App.css";
// import User from './Components/User/User';
// import Add from './Components/Add/Add';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=de&apiKey=897d0311377c472ab6d17eebc5885d1e"
    )
      .then((response) => {
        return response.json();
      })

      .then((myjson) => {
        this.setState({
          articles: myjson.articles
        });
      });
    console.log(this.state.articles);
  }

  render() {
    console.log(this.state);

    let news = this.state.articles.map((item, index) => {
      return (
        <div className="myDiv container float-left" key={index}>
          <div className="newsDiv card">
            <h4 className="newsTitle card-body">{item.title}</h4>

            <img
              className="newsImg card-body"
              src={item.urlToImage}
              alt="newsImg"
            />
            <p className="text-center">{item.author}</p>

            <p className="newsContent card-body">{item.content}</p>
            <a className="card-body" href={item.url}>
              Read more...
            </a>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <header>
          <nav className="navbar  myNav d-flex">
            <ul className="navbar-nav">
              <h3 className="text-center text-light">News App</h3>
            </ul>
          </nav>
        </header>

        <div className="d-flex flex-wrap justify-content-center">{news}</div>
      </div>
    );
  }
}

export default App;
