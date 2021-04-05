import React from "react";

class Friends extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {this.props.friends &&
            this.props.friends.map((friend) => {
              return (
                <tr>
                  <td>{friend._id}</td>
                  <td>{friend.name}</td>
                  <td>{friend.notes}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

export default Friends;
