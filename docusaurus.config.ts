import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Megabrain',
  tagline: '인제대학교 컴퓨터공학과 웹 개발 동아리 메가브레인',
  favicon: 'img/favicon/favicon.ico',

  url: 'https://megabrain.kr',
  baseUrl: '/',

  organizationName: 'inje-megabrain',
  projectName: 'megabrain.kr',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
              'https://github.com/inje-megabrain/megabrain.kr/blob/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/inje-megabrain/megabrain.kr/blob/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      }
    },
    navbar: {
      title: 'Megabrain',
      logo: {
        alt: 'My Site Logo',
        src: 'img/icons/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'slider',
          position: 'left',
          label: '소개',
        },
        {
          to: '/histories',
          label: '연혁',
          position: 'left'
        },
        {
          to: '/activities',
          label: '활동',
          position: 'left',
        },
        {
          to: '/recruit',
          label: '모집',
          position: 'left',
        },
        {
          to: '/megathon',
          label: '메가톤 2024',
          className: "nav-megathon",
          position: 'left',
        },
        {
          href: 'https://github.com/inje-megabrain',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '소개',
              to: '/intro',
            },
          ],
        },
        {
          title: '커뮤니티',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/inje-megabrain',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Megabrain.kr, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
