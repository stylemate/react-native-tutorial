import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Type things to do" style={styles.textInput} />
          <View style={styles.addButton}>
            <Button title="Add" />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text>List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  upperContainer: {
    backgroundColor: '#777',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  bottomContainer: {
    backgroundColor: '#dddddd',
    flex: 4,
    padding: 16,
  },
  inputContainer: {
    width: 240,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  textInput: {
    backgroundColor: '#ffffff',
    padding: 4,
    paddingVertical: 0,
    flex: 3,
    height: '100%',
  },
  addButton: {
    flex: 1,
    height: '100%',
  },
});

const CustomText = ({ children }: PropsWithChildren) => (
  <Text style={{ margin: 20 }}>{children}</Text>
);
