import React from 'react';
import { addDecorator } from '@storybook/react';

import ThemeContext from '../src/hooks/ThemeContext';

addDecorator(storyFn => <ThemeContext>{storyFn()}</ThemeContext>);