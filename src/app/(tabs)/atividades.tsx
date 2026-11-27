import { StyleSheet, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AtividadesScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.subtitle}>
          CULTURA EM MOVIMENTO
        </ThemedText>

        <ThemedText type="title" style={styles.title}>
          Atividades culturais
        </ThemedText>

        <ThemedText style={styles.description}>
          A leitura também acontece em encontros, oficinas e momentos
          compartilhados.
        </ThemedText>

        <ThemedView style={styles.featureCard}>
          <ThemedText style={styles.cardNumber}>
            01 / PARTICIPE
          </ThemedText>

          <ThemedText style={styles.cardTitle}>
            Descubra novas experiências
          </ThemedText>

          <ThemedText style={styles.cardText}>
            Conheça atividades e eventos relacionados à leitura e à cultura
            em Praia Grande.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.infoCard}>
          <ThemedText style={styles.infoTitle}>
            Em breve
          </ThemedText>

          <ThemedText style={styles.infoText}>
            Aqui você poderá encontrar informações sobre oficinas,
            encontros literários e outras atividades culturais.
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 24,
    paddingBottom: 40,
    gap: 18,
  },

  subtitle: {
    color: '#5D87B7',
    fontSize: 12,
    letterSpacing: 2,
  },

  title: {
    color: '#173B70',
    fontSize: 32,
  },

  description: {
    fontSize: 18,
    lineHeight: 26,
  },

  featureCard: {
    backgroundColor: '#173B70',
    padding: 24,
    borderRadius: 18,
    gap: 14,
    marginTop: 12,
  },

  cardNumber: {
    color: '#A9C7E5',
    fontSize: 12,
    letterSpacing: 1.5,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
  },

  cardText: {
    color: '#DCE8F5',
    fontSize: 15,
    lineHeight: 23,
  },

  infoCard: {
    backgroundColor: '#E9EDF3',
    padding: 22,
    borderRadius: 18,
    gap: 10,
  },

  infoTitle: {
    color: '#173B70',
    fontSize: 20,
    fontWeight: '600',
  },

  infoText: {
    color: '#2D3A47',
    fontSize: 15,
    lineHeight: 23,
  },
});
