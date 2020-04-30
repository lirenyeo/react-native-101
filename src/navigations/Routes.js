import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  TaskListScreen,
  AddTaskScreen,
  SettingScreen,
  SettingDonateScreen,
} from '../scenes';

const Tab = createBottomTabNavigator();

const TodoStack = createStackNavigator();
const SettingStack = createStackNavigator();

function TodoStackScreens() {
  return (
    <TodoStack.Navigator initialRoute="TaskList">
      <TodoStack.Screen
        name="TaskList"
        component={TaskListScreen}
        options={{title: 'Todo Tasks'}}
      />
      <TodoStack.Screen name="AddTask" component={AddTaskScreen} />
    </TodoStack.Navigator>
  );
}

function SettingStackScreens() {
  return (
    <SettingStack.Navigator initialRoute="Setting">
      <SettingStack.Screen name="Setting" component={SettingScreen} />
      <SettingStack.Screen
        name="SettingDonate"
        component={SettingDonateScreen}
      />
    </SettingStack.Navigator>
  );
}

const generateIcon = iconName => ({focused, color, size}) => {
  return <Icon name={iconName} size={size} color={color} />;
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Todo Tasks"
          component={TodoStackScreens}
          options={{
            tabBarIcon: generateIcon('list'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingStackScreens}
          options={{
            tabBarIcon: generateIcon('settings'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
