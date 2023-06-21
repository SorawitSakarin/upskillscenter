import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeTransition.css';

interface FadeTransitionProps {
  children: React.ReactNode;
  duration?: number;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  duration = 300,
}) => {
  return (
    <CSSTransition
      timeout={duration}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default FadeTransition;
