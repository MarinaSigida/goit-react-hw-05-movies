import styled from '@emotion/styled';

const Img = styled.img`
width: 270px;
height: 100%;
`;

const MovieSection = styled.section`
  display: flex;
  gap: 20px;
  padding-left: 40px;
`;

const MovieDescription = styled.div`
display: flex;
flex-direction: column;
font-size:24px;
gap:10px;`;

export { Img, MovieSection, MovieDescription };