"use client"

import { Menu, Group, Center, Burger, Container, Flex, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
// import { Burger } from '@mantine/core';
import classes from './HeaderMenu.module.css';
import { FaFire } from "react-icons/fa";
import Image from 'next/image';
import HeaderImage from '../../public/header-img.png'

const links = [
  { link: '/about', label: 'Home' },
  {
    link: '#1',
    label: 'Services',
    links: [
      { link: '/docs', label: 'Documentation' },
      { link: '/resources', label: 'Resources' },
      { link: '/community', label: 'Community' },
      { link: '/blog', label: 'Blog' },
    ],
  },
  { link: '/about', label: 'About Us' },
  { link: '/pricing', label: 'How can we help' },
  {
    link: '#2',
    label: 'Blog',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/demo', label: 'Book a demo' },
      { link: '/forums', label: 'Forums' },
    ],
  },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header } >
      <Container><FaFire/></Container>
      <Container size="md">
        <div className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
        <Button variant="filled" color="rgb(234, 252, 252)"  radius="md">Button</Button>
        </div>
      </Container>
          {/* <Burger opened={opened} onClick={toggle} size="sm" hidden/> */}
          {/* <Image src={HeaderImage} alt='header-img'/> */}
    </header>
  );
}