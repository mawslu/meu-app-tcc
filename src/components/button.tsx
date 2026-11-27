
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  icon?: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, icon, theme, onPress }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.button,
          theme === 'primary' && styles.primaryButton,
        ]}
        onPress={onPress}
      >
        {icon && (
          <Text style={styles.icon}>
            {icon}
          </Text>
        )}

        <Text style={styles.buttonLabel}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    height: 48,
    paddingHorizontal: 20,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#173B70',
  },

  primaryButton: {
    backgroundColor: '#5D87B7',
  },

  icon: {
    fontSize: 18,
  },

  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
