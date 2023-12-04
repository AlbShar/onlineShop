import { compose } from '@reduxjs/toolkit';

import { withReduxToolkit } from './with-redux';
import { withRouter } from './with-router';

import type { FunctionComponent } from 'react';

export const withProviders = compose<FunctionComponent>(withReduxToolkit, withRouter);