import React, { Component } from "react";

class AddItem extends Component {
  state = {
    without: "",
    count: 0
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = () => {
    const { without, count } = this.state;
    this.props.updateList({ count, name: without });
  };

  render() {
    const { closeModal, submitItem } = this.props;
    const { without, count } = this.state;

    return (
      <div>
        <form>
          <p>without:</p>
          <input
            type="text"
            value={without}
            name="without"
            onChange={this.onChange}
          />
          <p>count:</p>
          <input
            type="number"
            value={count}
            name="count"
            onChange={this.onChange}
          />
        </form>
        <button onClick={closeModal}>close</button>
        <button onClick={this.onSubmit}>submit</button>
      </div>
    );
  }
}

export default AddItem;
