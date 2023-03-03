import React from 'react';
import SocialIcons from './SocialIcons';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

const Footer = () => {
  return (
      <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              voluptatum reiciendis voluptate dolor assumenda maiores veniam
              accusamus corporis quas tempore doloribus, doloremque, neque quia
              animi beatae eius error deleniti aliquid?
            </li>
            <li>+23407039454841</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
                  </ul>
                  <SocialIcons />
              </Flex>
              <p>&copy:2023 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
