import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: [],
      data: [],
      page: 0
    };
  }

  componentDidMount() {
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
          chunks.push({ page: ++page, data: temp });
          temp = [];
        }
      }
      this.setState({
        allData: chunks,
        data: chunks[0].data,
        page: chunks[0].page
      });
    } catch (error) {
      console.log("TCL: App -> error", error);
    }
  };

  changePage = val => {
    this.setState({
      page: val.page,
      data: val.data
    });
  };

  nextPage = () => {
    let { page, allData } = this.state;
    this.setState({
      page: ++page,
      data: allData[page - 1].data
    });
  };

  previousPage = () => {
    let { page, allData } = this.state;
    this.setState({
      page: --page,
      data: allData[page - 1].data
    });
  };

  render() {
    const { allData, data, page } = this.state;
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: 50,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          {page != 1 && (
            <span
              onClick={this.previousPage}
              style={{
                backgroundColor: "red",
                color: "#fff",
                borderRadius: 100,
                cursor: "pointer"
              }}
            >
              {"<="}
            </span>
          )}
          {allData.map(val => {
            console.log(val);
            return (
              <span
                onClick={() => this.changePage(val)}
                style={{
                  backgroundColor: page === val.page ? "skyblue" : "yellow",
                  borderRadius: 100,
                  cursor: "pointer"
                }}
              >
                {val.page}
              </span>
            );
          })}
          {page != allData.length && (
            <span
              onClick={this.nextPage}
              style={{
                backgroundColor: "red",
                color: "#fff",
                borderRadius: 100,
                cursor: "pointer"
              }}
            >
              {"=>"}
            </span>
          )}
        </div>

        <div>
          {data.map((val, ind) => {
            return <p>{ind + 1 + "# " + val.title}</p>;
          })}
        </div>
      </div>
    );
  }
}
