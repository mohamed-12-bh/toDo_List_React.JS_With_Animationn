import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    contentItem: "",
  };

  addItem = () => {
    this.props.addItem(this.state.contentItem);
    this.setState({
      contentItem: "",
    });
  };
  render() {
    return (
      <div>
        <label>Enter new list:</label>
        <input
          type="text"
          className="validate"
          onChange={(event) =>
            this.setState({ contentItem: event.target.value })
          }
          value={this.state.contentItem}
          maxLength="20"
        />
        <p
          className="btn-floating"
          onClick={this.state.contentItem ? this.addItem : null}
        >
          <i className="material-icons">add</i>
        </p>
      </div>
    );
  }
}
export default AddTodo;
