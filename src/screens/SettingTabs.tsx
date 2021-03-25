import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Info from './Info';
import Contribute from './Contribute';

const Tab = createMaterialTopTabNavigator();

function SettingTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Contribute" component={Contribute} />
      </Tab.Navigator>
    );
}

export default SettingTabs;
