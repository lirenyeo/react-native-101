import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {ListItem, Text} from 'react-native-elements';

const todoTasks = [
  {
    title: 'Set alarm clocks for',
    icon: 'av-timer',
  },
  {
    title: 'On lookout for cheap flight to North Korea',
    icon: 'flight-takeoff',
  },
];

const completedTasks = [
  {
    title: 'Walk the dog',
    icon: 'assignment',
  },
  {
    title: 'Drink Coffee',
    icon: 'assignment',
  },
  {
    title: 'Eat Cereal',
    icon: 'assignment',
  },
  {
    title: 'Learn React Native',
    icon: 'assignment',
  },
];

export default function TaskListScreen() {
  return (
    <ScrollView>
      <View>
        {todoTasks.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{name: item.icon}}
            bottomDivider
          />
        ))}
      </View>
      <Text style={styles.heading}>Completed</Text>
      <View>
        {completedTasks.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{name: item.icon}}
            bottomDivider
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
});
