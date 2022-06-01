import { css, unsafeCSS } from 'lit';

export const FONT_FAMILIES = unsafeCSS(
  [
    '"Hiragino Kaku Gothic ProN"',
    '"Hiragino Sans"',
    '"Helvetica Neue"',
    'Arial',
    'Meiryo',
    'sans-serif',
  ].join(','),
);

export const FONT_COLOR = {
  black: '#212121',
  white: '#fafafa',
  link: '#c6a700',
  error: '#c62828',
} as const;

export const INPUT_COLOR = {
  default: {
    background: '#ffffff',
  },
  focused: {
    outline: 'rgba(198, 167, 0, 0.8)',
    background: '#ffffff',
  },
  error: {
    outline: 'rgba(198, 40, 40, 0.8)',
    background: '#ffeeff',
  },
  caret: '#c6a700',
} as const;

export const THEME_COLOR = {
  default: {
    font: FONT_COLOR.black,
    background: '#e8eaed',
  },
  primary: {
    font: FONT_COLOR.white,
    background: '#212121',
  },
  secondary: {
    font: FONT_COLOR.white,
    background: '#2e7c31',
  },
  disabled: {
    // FIXME:
    font: FONT_COLOR.white,
    background: '#62727b',
  },
} as const;

export const BUTTON_COLOR = {
  success: {
    font: FONT_COLOR.white,
    background: '#2e7c31',
  },
  error: {
    font: FONT_COLOR.white,
    background: '#c62828',
  },
  warning: {
    font: FONT_COLOR.black,
    background: '#fdd835',
  },
} as const;

export type ButtonColor = keyof typeof BUTTON_COLOR;

export const focusOutline = (color: string) => css`
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:focus-visible {
    outline: 3px solid ${unsafeCSS(color)};
    outline-offset: -2px;
  }
`;

/**
 * http://meyerweb.com/eric/tools/css/reset/
 * v2.0 | 20110126
 * License: none (public domain)
 */
const BASE_RESET_CSS = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const RESET_CSS = [
  BASE_RESET_CSS,
  css`
    li {
      list-style: none;
    }

    *,
    ::before,
    ::after {
      box-sizing: border-box;
      border-style: solid;
      border-width: 0;
    }

    * {
      font-family: ${FONT_FAMILIES};
    }

    body {
      line-height: 1;
      color: ${unsafeCSS(THEME_COLOR.default.font)};
      background-color: ${unsafeCSS(THEME_COLOR.default.background)};
    }

    p {
      word-break: break-all;
      white-space: pre-line;
    }

    button,
    input {
      padding: 0;
      margin: 0;
      appearance: none;
      cursor: pointer;
      &:disabled {
        cursor: default;
      }
    }

    select {
      appearance: none;
      &:-ms-expand {
        display: none;
      }
    }

    button,
    input,
    textarea,
    a,
    select {
      ${focusOutline(INPUT_COLOR.focused.outline)};
    }
  `,
];
