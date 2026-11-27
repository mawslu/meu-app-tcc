
import Logo from '@/components/logo';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Logo />
            </View>

            <ThemedText type="title" style={styles.title}>
              Entre Páginas e Ruas
            </ThemedText>

            <ThemedText style={styles.description}>
Informação mais perto de você.            </ThemedText>

            <View style={styles.card}>
              <ThemedText style={styles.cardTitle}>
                Descubra novos lugares
              </ThemedText>

              <ThemedText style={styles.cardText}>
                Encontre espaços de leitura e cultura pela cidade.
              </ThemedText>

              <Link href="/bibliotecas" style={styles.primaryLink}>
                Descobrir bibliotecas
              </Link>
            </View>

            <Link href="/about" style={styles.secondaryLink}>
              Conheça o projeto
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: Spacing.four,
  },

  content: {
    alignItems: 'flex-start',
    gap: Spacing.three,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },

  logoContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: Spacing.two,
  },

  title: {
    color: '#173B70',
    fontSize: 30,
    lineHeight: 36,
  },

  description: {
    color: '#173B70',
    fontSize: 20,
  },

  text: {
    color: '#52647A',
    fontSize: 15,
    lineHeight: 23,
    marginTop: Spacing.two,
    marginBottom: Spacing.three,
  },

  card: {
    backgroundColor: '#173B70',
    width: '100%',
    padding: 22,
    borderRadius: 18,
    gap: 12,
    marginTop: Spacing.two,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
  },

  cardText: {
    color: '#E9EDF3',
    fontSize: 14,
    lineHeight: 22,
  },

  primaryLink: {
    backgroundColor: '#FFFFFF',
    color: '#173B70',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 25,
    overflow: 'hidden',
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'flex-start',
    marginTop: Spacing.two,
  },

  secondaryLink: {
    color: '#5D87B7',
    fontSize: 15,
    marginTop: Spacing.two,
    marginBottom: Spacing.two,
  },
});
