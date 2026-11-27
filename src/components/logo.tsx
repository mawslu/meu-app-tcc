
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <Image
      source={require('@/assets/images/logo-tcc.png')}
      style={styles.logo}
      contentFit="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 220,
    height: 220,
  },
});

