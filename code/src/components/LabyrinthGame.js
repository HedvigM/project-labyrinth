import React from 'react';
import { useSelector } from 'react-redux';
import { StartPage } from './StartPage';
import { Description } from './Description';
import { LoadingLottie } from './Lottie';
import { Footer } from './Footer';
import styled from 'styled-components';

export const LabyrinthGame = () => {
  const currentPosition = useSelector(
    (store) => store.labyrinth.currentPosition
  );

  const loading = useSelector((state) => state.labyrinth.loading);

  let coordinates = 'start';

  if (currentPosition) {
    coordinates = currentPosition.coordinates;
  }

  if (loading) {
    return (
      <>
        <Wrapper>
          <InnerWrapper>
            <LoadingLottie />
          </InnerWrapper>
        </Wrapper>
      </>
    );
  }
  return (
    <>
      <Container
        className="labyrinth"
        style={{ backgroundImage: colorDictionary[coordinates] }}>
        <div></div>
        <InnerContainer>
          {currentPosition ? <Description /> : <StartPage />}
        </InnerContainer>
        <Footer />
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-color: #ff885e;
`;

const InnerWrapper = styled.div`
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  background-color: white;
  border: 3px solid black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const InnerContainer = styled.div`
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  background-color: #ff885e;
  border: 3px solid black;

  @media (min-width: 0px) and (max-width: 767px) {
    min-width: 200px;
    max-width: 300px;
  }
`;

const colorDictionary = {
  start: 'url("/assets/1.png")',
  '0,0': 'url("/assets/2.png")',
  '0,1': 'url("/assets/3.png")',
  '0,2': 'url("/assets/1.png")',
  '0,3': 'url("/assets/2.png")',
  '1,0': 'url("/assets/3.png")',
  '1,1': 'url("/assets/1.png")',
  '1,3': 'url("/assets/2.png")'
};
