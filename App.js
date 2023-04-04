import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';



const PlaceholderImage = require('./assets/crash.jpg');

export default function App() {
  
  

  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label={'Escolha uma foto'} />
        <Button label={'Usar a foto atual'} />
      </View>
      
      <StatusBar backgroundColor='black' barStyle={'light-content'}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
});
