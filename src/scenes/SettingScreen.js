import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { clearNotes } from '../ducks/notes';

export default function SettingScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      <View style={styles.container}>
        <Button
          onPress={() => {
            dispatch(clearNotes());
          }}
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
