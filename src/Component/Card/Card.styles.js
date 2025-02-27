import styled from 'styled-components';

export const StyledListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const StyledImageContainer = styled.div`
  align-items: center;
  width: 190px;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  min-height: 290px;
  padding-left: 2px;
  padding-top: 5px;
`;

export const StyledCardContainer = styled.div`
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid;
  margin-bottom: 10px;
  height: 370px;
  text-align: center;
  border-color: #ab9c8a;
  background-color: #fff9f2;
  overflow: auto;
`;

export const MovieTitle = styled.p`
  font-weight: bolder;
  font-size: 16px;
  padding-left: 5px;
  overflow: auto;
  max-width: 180px;
  margin-bottom: 3px;
`;

export const MovieYear = styled.p`
  font-family: 'Inter-Medium';
  font-size: 14px;
  line-height: 10px;
  font-weight: bolder;
`;
