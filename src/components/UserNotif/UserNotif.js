import React from 'react';
import styled from "styled-components";

const Wrap = styled.div`
  padding: 0 15px;
  width: 100%;
  margin-bottom: 30px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    margin: 0 auto 30px auto;
    max-width: 570px;
  }
`;

const ImageWrap = styled.div``;

const Text = styled.div`
  font-size: 21px;
`;

const IMG = styled.img`
  width: 100%;
  height: auto;
`;

const UserNotif = ({text, img}) => (
  <Wrap>
    <ImageWrap>
      <IMG src={img} />
    </ImageWrap>
    <Text>
      {text}
    </Text>
  </Wrap>
)

export default UserNotif;