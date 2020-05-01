import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

export default function SettingScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      <View style={styles.container}>
        <Button
          title="Clear All Notes"
          icon={{
            name: 'local-cafe',
            size: 15,
            color: 'white',
          }}
        />
      </View>
      <View style={styles.container2}>
        <Button
          onPress={() => {
            navigation.navigate('SettingDonate');
          }}
          title="Buy me a coffee"
          icon={{
            name: 'local-cafe',
            size: 15,
            color: 'white',
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
  },
  container2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
