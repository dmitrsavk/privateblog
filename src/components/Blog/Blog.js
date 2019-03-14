import React, { Component } from "react";
import { connect } from "react-redux";
import { submit } from "../../state/blog/reducer";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ru";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./blog.css";

import { logout } from "../../state/user/reducer";
import { deleteRecord, change } from "../../state/blog/reducer";

import logo from "../Landing/logo_white.svg";
import back from "./background-blog.jpg";
// import deleteIcon from "./delete.svg";
// import editIcon from "./edit.svg";

// import UserNotif from "../UserNotif/UserNotif";
const SCard = styled(Card)`
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }
`;

const STypography = styled(Typography)`
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }
`;

const Wrap = styled.div`
  min-height: 100vh;
  /* background-size: auto auto;
  background-repeat: repeat;
  background-image: url(${back}); */
  background-color: #F1F1F1;
`;

const Records = styled.div`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
`;

const Inner = styled.div`
  position: relative;
  height: 50px;
  margin-bottom: 50px;
  background-color: #38495c;
`;

const Logo = styled.div`
  position: relative;
  top: -2px;
  width: 100px;
  height: 50px;
  margin: 0 auto;
  background-image: url(${logo});
  background-size: cover;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 30px;

  @media (max-width: 600px) {
    right: 15px;
  }
`;

const User = styled.div`
  margin-right: 30px;
  color: #fff;
`;

const Header = ({ user, onBtnClick }) => (
  <Inner>
    <Logo />
    <Section>
      <User>{user}</User>
      <Button onClick={onBtnClick} variant="raised" size="small">
        Выйти
      </Button>
    </Section>
  </Inner>
);

const Title = styled.h1`
  text-align: center;
  display: none;
`;

const Delete = styled.div`
  position: absolute;
  bottom: -15px;
  right: -15px;
  padding: 15px;
  cursor: pointer;
  font-weight: 600;

  :hover {
    color: #c12122;
  }
`;

const RecordField = styled.textarea`
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  resize: none;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  padding: 15px;
  font-size: 17px;
  color: #666;

  @media (min-width: 750px) {
    width: 100%;
  }
`;

const Redactor = styled.div`
  display: flex;
  width: calc(100% - 30px);
  max-width: 750px;
  flex-direction: column;
  margin: 0 15px 80px;

  @media (min-width: 750px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

class Blog extends Component {
  state = {
    input: "",
    records: []
  };

  onInputChange = event => {
    this.props.change(event.target.value);
  };

  onSubmit = () => {
    if (this.props.input) {
      this.props.submit({ input: this.props.input });
    }
  };

  getDate = date => {
    moment.locale("ru");
    return (
      moment(date)
        // .add(3, "hours")
        .format("LLL")
    );
  };

  deleteRecord = id => () => {
    this.props.deleteRecord(id);
  };

  render() {
    return (
      <Wrap>
        <Header user={this.props.userName} onBtnClick={this.props.logout} />
        <Title>Ваш дневник</Title>
        {/* {this.props.userId === 41 && (
          <UserNotif
            text=""
            img=""
          />
        )} */}
        <Redactor>
          <RecordField value={this.props.input} onChange={this.onInputChange} />
          <Button
            onClick={this.onSubmit}
            disabled={this.props.saveInProgres === "pending"}
          >
            Сохранить
          </Button>
        </Redactor>
        <Records>
          {this.props.records &&
            this.props.records.map(record => (
              <SCard key={record.id}>
                <CardContent>
                  <STypography>{record.text}</STypography>
                  <STypography color="secondary">{this.getDate(record.createdAt)}</STypography>
                  {/* <Delete onClick={this.deleteRecord(record.id)}>Удалить</Delete> */}
                </CardContent>
              </SCard>
            ))}
        </Records>
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  records: state.user.data.records,
  userName: state.user.data.name,
  input: state.blog.input,
  saveInProgres: state.blog.status,
  userId: state.user.data.id
});

const mapDispatchToProps = dispatch => ({
  submit: data => dispatch(submit(data)),
  change: data => dispatch(change(data)),
  logout: () => dispatch(logout()),
  deleteRecord: id => dispatch(deleteRecord(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
