import React from "react";
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import {darkTheme, lightTheme} from "../src/theme/theme";

addDecorator(storyFn => <ThemeProvider theme={lightTheme}>{storyFn()}</ThemeProvider>)
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
