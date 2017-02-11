import React from 'react';
import {
  Wrapper,
  HeaderWrapper,
  ImageWrapper,
  FooterWrapper,
} from './Wrappers';

const DocumentItem = ({ item }) => (
  <Wrapper>
    {item.has('headers') &&
      <HeaderWrapper>
        Author
      </HeaderWrapper>
    }
    <ImageWrapper>
      <img src={item.get('file')} role="presentation" />
    </ImageWrapper>
    {item.has('footer') &&
      <FooterWrapper>
        <div>Likes</div>
        <div>comment</div>
      </FooterWrapper>
    }
  </Wrapper>
);

export default DocumentItem;
