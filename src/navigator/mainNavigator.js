import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList78930Navigator from '../features/ArticleList78930/navigator';
import ArticleList78929Navigator from '../features/ArticleList78929/navigator';
import ArticleList78928Navigator from '../features/ArticleList78928/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList78930: { screen: ArticleList78930Navigator },
ArticleList78929: { screen: ArticleList78929Navigator },
ArticleList78928: { screen: ArticleList78928Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
