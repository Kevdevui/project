import { createGlobalStyle } from 'styled-components';

// global styling for all the pages.
const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    /* color */
    --egg-white: #eae7dc;
    --dark-vanilla: #d8c3a5;
    --deep-dark: #1E1E1E;
    --tape-grey: #8e8d8a;
    --gray-1: #BCB4B4;
    --gray-2: #363636;
    --warm-red: #e98074;
    --white : white;
    --black: black;
    --jellybean-red: #e85a4f;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--white);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  /* p{
    color: var(--black);
  } */
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
