import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Split from "react-split";
import Code from "./Code";
import Form from "./Form";
import he from "he";
import Preview from "./Preview";

class App extends Component {
  state = {
    Dark: true,
    FormData: {
      FirstName: "",
      LastName: "",
      Thubmnail: "",
      URL: "",
      Description: "",
      Keywords: "",
      Address: "",
      Phone: "",
      Email: "",
      Colour: "#bd5e38",
      Socials: {
        Facebook: "",
        WhatsApp: "",
        Instagram: "",
        Twitter: "",
        LinkedIn: "",
        GitHub: "",
        StackOverflow: ""
      }
    },
    fileDownloadUrl: null,
    PreviewMode: false
  };

  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    });
  };

  handleChange = e => {
    this.setState({
      FormData: {
        ...this.state.FormData,
        [e.target.name]: e.target.value
      },
      PreviewMode: false
    });
  };

  download = () => {
    let output = he.decode(
      document.getElementsByClassName("codefile")[0].innerHTML
    );
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    this.setState({ fileDownloadUrl: fileDownloadUrl }, () => {
      this.doFileDownload.click();
      URL.revokeObjectURL(fileDownloadUrl);
      this.setState({ fileDownloadUrl: "" });
    });
  };

  render() {
    return (
      <div className="App">
        <Header dark={this.state.Dark} className="Header">
          <span>Portfolio Generator</span>
          <button
            className="btn btn-sm btn-outline-primary rounded-circle"
            onClick={this.toggleHeader}
          >
            <i style={{color:'#ffc107'}}
              className={"fa-solid " + (this.state.Dark ? "fa-sun" : "fa-cloud-moon")}
            ></i>
          </button>
        </Header>
        <div className="container-fluid">
          <Split className="split">
            <div className="p-3" /*className='col-12 col-md-6'*/>
              <Form
                FormData={{
                  FullName: `${this.state.FormData.FirstName} ${this.state.FormData.LastName}`,
                  ...this.state.FormData
                }}
                onChange={this.handleChange}
              />
              <div className="text-center">
              <button
              style={{background:'#126ccc'}}
                className="btn btn-success"
                onClick={() => {
                  this.download();
                }}
                disabled={this.state.PreviewMode}
                title="Go to the Code View to download."
              >Download 
                <i style={{color:'white'}}
              className={"pl-2 fa-solid fa-angles-down"}
            ></i>
              </button>
              <a
                className="d-none"
                download={"portfolio.html"}
                href={this.state.fileDownloadUrl}
                ref={e => (this.doFileDownload = e)}
              >
                Download
              </a>
            </div>
            </div>
            <div className="p-3" /*className='col-12 col-md-6'*/>
              <ul className="nav nav-tabs mb-2">
                <li className="nav-item">
                  <span
                    className={
                      "nav-link " + (!this.state.PreviewMode ? "active" : "")
                    }
                    onClick={e => {
                      e.preventDefault();
                      this.setState({
                        PreviewMode: false
                      });
                    }}
                  >
                    Code
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className={
                      "nav-link " + (this.state.PreviewMode ? "active" : "")
                    }
                    onClick={e => {
                      e.preventDefault();
                      this.setState({
                        PreviewMode: true
                      });
                    }}
                  >
                    Preview
                  </span>
                </li>
              </ul>
              {this.state.PreviewMode ? (
                <Preview
                  {...this.state.FormData}
                  FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
                />
              ) : (
                <Code
                  {...this.state.FormData}
                  FullName={`${this.state.FormData.FirstName} ${this.state.FormData.LastName}`}
                />
              )}
            </div>
          </Split>
        </div>
      </div>
    );
  }
}

export default App;
