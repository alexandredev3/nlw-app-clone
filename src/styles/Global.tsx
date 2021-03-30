import { Global as EmotionGlobal } from '@emotion/react';

const Global = (): JSX.Element => (
  <EmotionGlobal
    styles={`
      body, input, textarea, button {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;

        background: #121214;
      }

      h1, h2, h3, h4 {
        color: #E1E1E6;
      }

      ::placeholder {
        color: #737380;
      }

      button {
        color: #FFFF;
      }

      ::-webkit-scrollbar {
        width: 0.4rem;
      }

      ::-webkit-scrollbar-track {
        background: #121214;
      }

      ::-webkit-scrollbar-thumb {
        background: #505058;
      }
    `}
  />
);

export default Global;
