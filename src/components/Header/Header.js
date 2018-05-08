import React, { Component } from "react";
import styled from "styled-components";

const url =
  "https://www.facebook.com/v2.12/dialog/oauth?client_id=159008188111833&redirect_uri=https://privateblog.ru/api/auth/fb";

const SHeader = styled.div`
  height: 50px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Logo = styled.span``;

const Link = styled.a``;

const UserBlock = styled.div``;

const Name = styled.span``;
const Button = styled.button``;

export default class MainHeader extends Component {
  render() {
    const { user, onLogout } = this.props;

    return (
      <SHeader>
        <Logo>Private Blog</Logo>
        {user.status === "success" && !user.data.name && <Link href={url}>Войти через facebook</Link>}
        {user.status === "success" && user.data.name && (
          <UserBlock>
            <Name>{user.data.name}</Name>
            <Button onClick={onLogout}>Выйти</Button>
          </UserBlock>
        )}
      </SHeader>
    );
  }
}
