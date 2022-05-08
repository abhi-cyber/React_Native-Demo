import { Image, StyleSheet, Text,SafeAreaView, View } from 'react-native';


export default function Open() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.line1}>Welcome to,</Text>
      <Text style={styles.line2}>PG Finder</Text>
      <Text style={styles.line3}>We have best in{"\n"}class{"\n"}Recommindations{"\n"}for PG's.</Text>
      <Image
        source={require('..../assets/arrow-right.png')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1114' 
  },
  line1: {
    color: 'white',
    fontWeight: "bold",
    marginTop : 90,
    fontSize: 20,
  },
  line2: {
    color: 'white',
    marginTop : 10,
    fontWeight: "bold",
    fontSize: 35
  },
  line3: {
    color: '#696969',
    marginTop : 30,
    fontWeight: "bold",
    fontSize: 35
  },
});
