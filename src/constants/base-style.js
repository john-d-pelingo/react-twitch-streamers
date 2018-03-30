import { CLEAR_BLUE, DARK_BLACK } from './colors';

// language=CSS
export default `
  /* === Reset === */
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -moz-box-sizing: inherit;
    -webkit-box-sizing: inherit;
  }

  *:focus {
    outline: none;
  }

  html,
  body,
  blockquote,
  dd,
  dl,
  dt,
  fieldset,
  figure,
  form,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  iframe,
  legend,
  li,
  ol,
  p,
  pre,
  textarea,
  ul {
    margin: 0;
    padding: 0;
  }

  button,
  input,
  select {
    margin: 0;
  }

  td,
  th {
    padding: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  /* === Elements === */
  html {
    background-color: white;
    cursor: default;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    color: ${DARK_BLACK};
    font-size: 1rem;
    line-height: 1.3125;
  }

  a {
    background-color: transparent;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  button {
    cursor: pointer;
    overflow: visible;
  }

  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  hr {
    border: 0;
    border-top: 1px solid;
  }

  img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    text-align: left;
  }

  /* === Template === */
  html,
  body {
    font-family: Helvetica, sans-serif;
  }

  body {
    overflow-x: visible;
    position: relative;
    width: 100%;
  }

  div {
    border: none;
    outline: none;
  }

  a {
    color: ${CLEAR_BLUE};
    cursor: pointer !important;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  audio,
  embed,
  img,
  iframe,
  object,
  video {
    height: auto;
    max-width: 100%;
  }

  fieldset,
  iframe {
    border: 0;
  }

  img {
    border: none;
    height: auto;
    vertical-align: top;
    width: auto;
  }

  ul,
  li {
    list-style-type: none;
  }

  input,
  textarea {
    vertical-align: top;
  }

  b,
  strong {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }
`;
