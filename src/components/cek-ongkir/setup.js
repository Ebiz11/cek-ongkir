import React from 'react';
import { StackNavigator } from 'react-navigation';

import Routes from './routes';

const RootNavigator = StackNavigator(Routes, {
  initialRouteName: 'Index',
  headerMode: 'none',
});

export default RootNavigator;
