import { ImageBackground, StyleSheet, Text,SafeAreaView, View } from 'react-native';
import Open from './src/screens/OpenPage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Open />      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
