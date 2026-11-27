
import { SymbolView } from 'expo-symbols';
import { StyleSheet, View } from 'react-native';

type Props = {
  name: string;
  size?: number;
  color: string;
};

export default function IconSymbol({ name, size = 24, color }: Props) {
  return (
    <View style={styles.container}>
      <SymbolView
        name={{
          ios: name,
          android: name,
          web: name,
        }}
        size={size}
        tintColor={color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
