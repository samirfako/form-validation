import { useContext } from 'react';
import { AccountContext } from './accountContext';
import React from 'react';
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  MutedLink,
  BoldLink,
} from './common';
import { Marginer } from '../marginer';

const LoginForm = (props) => {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={15} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Sign in</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{' '}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default LoginForm;
