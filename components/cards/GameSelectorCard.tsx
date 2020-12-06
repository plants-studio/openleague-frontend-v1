import React, { useEffect, useRef, useState } from 'react';
import { Card, Icon, IconButton } from 'plants-ui';
import SwipeContentWrapper from '../utility/SwipeContentWrapper';
import StaticImageWrapper from '../atoms/StaticImageWrapper';
import CardWrapper from '../templates/CardWrapper';
import style from './GameSelectorCard.module.scss';
import SliderButton from './../atoms/SliderButton';

const gameList = [
  {
    id: 1,
    name: 'League Of Legend',
    imagePath: '/images/game-leagueoflegend.jpg',
  },
  { id: 2, name: 'Overwatch', imagePath: '/images/game-overwatch.jpg' },
  {
    id: 3,
    name: 'Battleground',
    imagePath: '/images/game-battleground.jpg',
  },
  {
    id: 4,
    name: 'Rainbow Six Siege',
    imagePath: '/images/game-rainbowsixsiege.jpg',
  },
  { id: 5, name: 'Valorant', imagePath: '/images/game-valorant.jpg' },
  { id: 6, name: 'Etc', imagePath: '/images/game-etc.jpg' },
];

interface IProps {
  onClick?: (name: string) => void;
}

const GameSelectorCard = ({ onClick }: IProps) => {
  const minIndex = 0;
  const maxIndex = 1;

  const [margin, setMargin] = useState(0);

  const imageSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && margin / 100 < -minIndex) {
      setMargin((margin) => (margin = margin + 100));
    } else if (direction === 'right' && margin / 100 > -maxIndex) {
      setMargin((margin) => (margin = margin - 100));
    } else {
      console.log('unexpected slider request');
    }
  };

  return (
    <CardWrapper margin="1rem 0">
      <Card cardTitle="게임별 대회 보기">
        <div className={style.swipearea}>
          <SliderButton
            direction="left"
            onClick={() => {
              imageSwipe('left');
            }}
          />
          <SliderButton
            direction="right"
            onClick={() => {
              imageSwipe('right');
            }}
          />
          <SwipeContentWrapper>
            <div
              style={{
                width: '200%',
                display: 'flex',
                marginLeft: `${margin}%`,
                transition: '300ms ease-out',
                position: 'relative',
              }}
            >
              {gameList.map((game) => (
                <div
                  className={style.areadivider}
                  key={game.id}
                  onClick={() => onClick(game.name)}
                >
                  <div className={style.gamewrapper}>
                    <StaticImageWrapper
                      OptWidth={1201}
                      OptHeight={432}
                      borderRadius="5px"
                      width="100%"
                      height="1"
                      imagePath={game.imagePath}
                      quality={40}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwipeContentWrapper>
        </div>
      </Card>
    </CardWrapper>
  );
};

export default GameSelectorCard;
