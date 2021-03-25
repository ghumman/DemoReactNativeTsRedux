import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
import SettingsTabs from './SettingTabs';


const Drawer = createDrawerNavigator();
function MyDrawer() {


    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings Tabs" component={SettingsTabs} />
      </Drawer.Navigator>
    );
  }

export default MyDrawer;
