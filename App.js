import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


const PlaceholderImage = require('./assets/crash.jpg');

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

    const pickImageAsync = async () =>{
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1
      });

      if(!result.canceled){
        setSelectedImage(result.assets[0].uri)
        setShowAppOptions(true);
      }else{
        alert('You dit not select any image')
      }
    }
  

  return (
    <View style={styles.container}>
      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      
      
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
