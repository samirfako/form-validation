import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './loginForm';
import SignupForm from './signupForm';
import { motion } from 'framer-motion';
import { AccountContext } from './accountContext';

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -310px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  margin: 0;
  margin-top: 7px;
  z-index: 10;
`;

const InnerContainer = styled.div`
  width: 87.5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1em;
  margin-top: -1em;
`;

// Framer motion:
const backdropVariants = {
  expanded: {
    width: '240%',
    height: '1050px',
    borderRadius: '30%',
    transform: 'rotate(60deg)',
  },
  collapsed: {
    width: '160%',
    height: '550px',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
  },
};

const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30,
};

const AccountBox = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [active, setActive] = useState('signin');

  const playExpandingAnimation = () => {
    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signup');
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signin');
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === 'signin' && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === 'signup' && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === 'signin' && <LoginForm />}
          {active === 'signup' && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
};

export default AccountBox;
