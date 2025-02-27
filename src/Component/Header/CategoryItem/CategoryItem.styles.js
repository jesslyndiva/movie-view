import styled from 'styled-components';

export const ResetButton = styled.button`
  background-color: #faa646;
  border: none;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  font-family: 'Inter-Medium';
  margin-left: auto;
  margin-right: 30px;
`;

export const StyledCategoryText = styled.p`
  font-family: 'Inter-Medium';
  font-size: 18px;
  line-height: 20px;
  padding-left: 75px;
  cursor: pointer;
  font-weight: bolder;
  color: ${(props) => (props.className === props.currentCategory ? '#9c5403' : 'white')};
`;
