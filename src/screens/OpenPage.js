import { ImageBackground, StyleSheet, Text,SafeAreaView, View } from 'react-native';

const image = { uri: "https://cdn.dribbble.com/users/3912043/screenshots/14503962/media/6506cd7891d9610a374aaabdb34976ff.jpg?compress=1&resize=1200x900&vertical=top" };

export default function Open() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
