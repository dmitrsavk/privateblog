import React, { Component } from "react";
import { connect } from "react-redux";
import { submit } from "../../state/blog/reducer";
import styled from "styled-components";

const Records = styled.div``;

const Record = styled.div``;

class Blog extends Component {
  state = {
    input: ""
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.props.submit({ input: this.state.input });
  };

  render() {
    return (
      <div>
        <h1>Blog</h1>
        <input value={this.state.value} onChange={this.onInputChange} />
        <button onClick={this.onSubmit}>Submit</button>
        <Records>
          {this.props.records.map(record => (
            <Record key={record.id}>
              <div>{record.createdAt}</div>
              <div>{record.text}</div>
            </Record>
          ))}
        </Records>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  records: state.user.data.records
});

const mapDispatchToProps = dispatch => ({
  submit: data => dispatch(submit(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
