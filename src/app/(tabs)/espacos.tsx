import { StyleSheet, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function EspacosScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.subtitle}>
          EXPLORE A CIDADE
        </ThemedText>

        <ThemedText type="title" style={styles.title}>
          Explorar espaços
        </ThemedText>

        <ThemedText style={styles.description}>
          Descubra lugares de leitura, cultura e conhecimento em Praia Grande.
        </ThemedText>

        <ThemedView style={styles.mapArea}>
          <ThemedText style={styles.mapIcon}>
            ⌖
          </ThemedText>

          <ThemedText style={styles.mapTitle}>
            Praia Grande
          </ThemedText>

          <ThemedText style={styles.mapText}>
            O mapa dos espaços de leitura aparecerá aqui.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.infoCard}>
          <ThemedText style={styles.cardTitle}>
            Encontre novos lugares
          </ThemedText>

          <ThemedText style={styles.cardText}>
            Em breve, você poderá localizar bibliotecas e espaços culturais
            próximos e consultar informações sobre cada lugar.
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

  mapArea: {
    minHeight: 280,
    backgroundColor: '#E9EDF3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 12,
    marginTop: 10,
  },

  mapIcon: {
    color: '#5D87B7',
    fontSize: 50,
  },

  mapTitle: {
    color: '#173B70',
    fontSize: 24,
    fontWeight: '600',
  },

  mapText: {
    color: '#2D3A47',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },

  infoCard: {
    backgroundColor: '#173B70',
    padding: 22,
    borderRadius: 18,
    gap: 10,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },

  cardText: {
    color: '#DCE8F5',
    fontSize: 15,
    lineHeight: 23,
  },
});

