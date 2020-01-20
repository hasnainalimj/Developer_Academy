import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      loader: true
    };
  }

  componentDidMount() {
    // this.getList();
    this.getPagination();
  }

  getPagination = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      let chunks = [];
      let temp = [];
      let page = 0;
      for (let i = 0; i < data.length; i++) {
        if (temp.length < 11) {
          temp.push(data[i]);
        }

        if (temp.length === 10) {
          chunks.push({ page: ++page, data : temp });
          temp = [];
        }
      }
      console.log("chunks" , chunks);
    } catch (error) {
      console.log("TCL: App -> error", error);
    }
  };

  getList = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const list = await response.json();
      console.log("TCL: App -> getList -> list", list);
      if (list.length) {
        this.setState({
          list,
          loader: false
        });
      } else {
        this.setState({
          list: [],
          loader: false
        });
      }
    } catch (error) {
      this.setState({
        list: [],
        loader: false
      });
      console.log("TCL: App -> getList -> error", error);
    }
  };

  searchList = async searchTerm => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${searchTerm}`
      );
      const result = await response.json();
      console.log("TCL: App -> result", result);
    } catch (error) {
      console.log("TCL: App -> searchList -> error", error);
    }
  };

  searchName = searchName => {
    const { list } = this.state;
    const data = list.filter(obj => {
      return obj.title.toLowerCase().includes(searchName.toLowerCase());
    });
    console.log(data);
  };

  render() {
    const { list, loader } = this.state;
    return (
      <div>
        {!!list.length && (
          <input
            type="text"
            placeholder="Search Name"
            onChange={e => this.searchName(e.currentTarget.value)}
          />
        )}
        <input
          type="number"
          placeholder="Search"
          onChange={e => this.searchList(e.currentTarget.value)}
        />
        {loader ? (
          <h1>Loading....</h1>
        ) : (
          <React.Fragment>
            {!list.length ? (
              <h1>Items not found.....</h1>
            ) : (
              list.map((val, index) => {
                return <p>{index}</p>;
              })
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}