import { Global } from '@emotion/react';

const Fonts = (): JSX.Element => (
  <Global
    styles={`
      body, input, textarea, button {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
      }
    `}
  />
);

export default Fonts;
