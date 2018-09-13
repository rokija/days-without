import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddItem from "../../containers/AddItem";

const data = [{ name: "alcohol", count: 0 }, { name: "whatever", count: 0 }];

class Home extends Component {
  state = {
    showModal: false,
    list: data
  };

  onModalOpen = () => this.setState({ showModal: true });

  onModalClose = () => this.setState({ showModal: false });

  submitItem = (without, count) => {
    const { list } = this.state;

    this.setState({ list: [...list, { count, name: without }] });
  };

  render() {
    const { showModal } = this.state;
    console.log(this.props.user);

    return (
      <div>
        <h2>Days without</h2>
        {this.props.user.map((el, i) => (
          <div key={i}>
            <Link to={`/without/${i}`}>{el.name}</Link>
          </div>
        ))}
        <button onClick={this.onModalOpen}>Add New</button>
        {!showModal && (
          <AddItem
            closeModal={this.onModalClose}
            submitItem={this.submitItem}
          />
        )}
      </div>
    );
  }
}

export default Home;
