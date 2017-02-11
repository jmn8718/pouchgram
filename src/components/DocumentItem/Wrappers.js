import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  border: 1px solid red;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  margin-left: -1px;
  margin-right: -1px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  height: 64px;
  padding: 14px 20px;
  align-items: center;
  flex-direction: row;
`;

export const ImageWrapper = styled.div`
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
  box-shadow: inset 0 0 20px 0 #efefef;
  width: 100%;
  & img {
    max-width: 100%;
  }
`;

export const FooterWrapper = styled.div`
  @media (min-width: 736px) {
    padding: 0 24px;
    font-size: 15px;
    line-height: 18px
    &:first-child {
      margin-top: 20px;
    }
    & > * {
      margin-bottom: 7px;
    }
  }
`;
