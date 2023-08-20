import { StyleSheet, Image } from "react-native";

const ImageViewer = ({ imageSource, selectedImage }: any) => {
  const imageCurrent = selectedImage ? { uri: selectedImage } : imageSource;
  return <Image source={imageCurrent} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
