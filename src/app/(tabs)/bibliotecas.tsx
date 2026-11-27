
import { StyleSheet, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function BibliotecasScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.subtitle}>
          DESCUBRA • EXPLORE • LEIA
        </ThemedText>

        <ThemedText type="title" style={styles.title}>
          Bibliotecas
        </ThemedText>

        <ThemedText style={styles.description}>
          Conheça as bibliotecas e descubra o que cada espaço oferece.        </ThemedText>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionNumber}>
            01 / PRAIA GRANDE
          </ThemedText>

          <ThemedText style={styles.sectionTitle}>
            Encontre seu próximo lugar de leitura
          </ThemedText>

          <ThemedText style={styles.text}>
            Conheça bibliotecas da cidade, consulte
            informações e descubra espaços que
            aproximam você do conhecimento.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.infoCard}>
          <ThemedText style={styles.cardTitle}>
            Em breve
          </ThemedText>

          <ThemedText style={styles.cardText}>
            Em breve

            Aqui você poderá consultar informações
            sobre as bibliotecas, como endereço,
            horário de funcionamento, contato e
            serviços.
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
    fontSize: 34,
  },

  description: {
    fontSize: 18,
    lineHeight: 26,
  },

  section: {
    backgroundColor: '#173B70',
    padding: 24,
    borderRadius: 18,
    gap: 14,
    marginTop: 12,
  },

  sectionNumber: {
    color: '#A9C7E5',
    fontSize: 12,
    letterSpacing: 1.5,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 23,
  },

  infoCard: {
    backgroundColor: '#E9EDF3',
    padding: 22,
    borderRadius: 18,
    gap: 10,
  },

  cardTitle: {
    color: '#173B70',
    fontSize: 20,
    fontWeight: '600',
  },

  cardText: {
    color: '#2D3A47',
    fontSize: 15,
    lineHeight: 23,
  },
});
