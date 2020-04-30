import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { useSelector } from 'react-redux';

export default function NoteListScreen() {
  const notes = useSelector(state => state);
  console.log(notes);
  if (!notes.length) {
    return (
      <View style={styles.container}>
        <Text>You haven't added any notes</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View>
        {notes.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            subtitle={item.text}
            subtitleStyle={styles.subtitle}
            leftIcon={{ name: item.icon }}
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
  subtitle: {
    fontSize: 14,
    fontWeight: '200',
    marginTop: 5,
  },
});
