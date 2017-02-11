import React from 'react';
import DocumentItem from '../DocumentItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  padding: 0;
  position: relative;
`;

const TodoList = ({ data }) => (
  <Wrapper>
    {data.filter((item) => item.has('file')).map((item, index) => <DocumentItem item={item} key={index} />)}
  </Wrapper>
);

export default TodoList;
