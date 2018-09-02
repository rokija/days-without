import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddItem from "../AddItem";

const data = [{ name: "alcohol" }, { name: "whatever" }];

class Home extends Component {
  state = {
    showModal: false
  };

  onModalOpen = () => this.setState({ showModal: true });
  onModalClose = () => this.setState({ showModal: false });

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <h2>Days without</h2>
        {data.map((el, i) => (
          <div key={i}>
            <Link to={`/without/${i}`}>{el.name}</Link>
          </div>
        ))}
        <button onClick={this.onModalOpen}>Add New</button>
        {showModal && <AddItem closeModal={this.onModalClose} />}
      </div>
    );
  }
}

export default Home;
