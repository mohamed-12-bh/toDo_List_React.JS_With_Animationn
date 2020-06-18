import React, { Component } from "react";
import FlipMove from "react-flip-move";

class Todos extends Component {
  render() {
    return (
      <div className="collection">
        <FlipMove duration={2000} easing="ease-in-out">
          {this.props.todos.length ? (
            this.props.todos.map((item) => (
              <div className="collection-item" key={item.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{item.content}</span>
                  <div>
                    <span
                      className="red-text"
                      style={{ cursor: "pointer", fontWeight: "bolder" }}
                      onClick={() => this.props.deleteItem(item.id)}
                    >
                      X
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="center">You have no todo's left</p>
          )}
        </FlipMove>
      </div>
    );
  }
}
export default Todos;
