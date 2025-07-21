/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import ThemeChanger from './src/ThemeChanger';
import ShowUserList from './src/ShowUserList';
AppRegistry.registerComponent(appName, () => ShowUserList);
