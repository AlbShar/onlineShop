import { compose } from '@reduxjs/toolkit';

import { withReduxToolkit } from './with-redux';

import type { FunctionComponent } from 'react';

export const withProviders = compose<FunctionComponent>(
  withReduxToolkit,
);