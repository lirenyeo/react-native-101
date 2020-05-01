import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Text, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from '../ducks/notes';

export default function NoteListScreen({ navigation }) {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(data.notes);

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      {data && data.notes && data.notes.length ? (
        <View>
          {data.notes.map((item, i) => (
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
      ) : (
        <View style={styles.container}>
          <Text>You haven't added any notes</Text>
        </View>
      )}
      <Button
        onPress={() => {
          dispatch(
            addNote({
              title: 'I Am New Note',
              text: 'Hello New Note',
              icon: 'new-releases',
            }),
          );
        }}
        title="Add Note"
      />
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
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '200',
    marginTop: 5,
  },
});
