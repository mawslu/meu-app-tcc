
import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText style={styles.subtitle}>
          EXPLORE • CONHEÇA • VISITE
        </ThemedText>

        <ThemedText type="title" style={styles.title}>
Conheça os espaços de leitura da cidade.
        </ThemedText>

        <ThemedText style={styles.description}>
          A leitura pode nos levar a lugares incríveis.
          Explore os espaços culturais de Praia Grande
          e descubra novas formas de se conectar com
          histórias e conhecimento.
        </ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardNumber}>
            01 / CULTURA
          </ThemedText>

          <ThemedText style={styles.cardTitle}>
            Mais perto da comunidade
          </ThemedText>

          <ThemedText style={styles.cardText}>
            Nosso sistema reúne informações que
            ajudam você a encontrar bibliotecas
            e espaços de leitura na cidade.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.info}>
          <ThemedText style={styles.infoTitle}>
            Informação também é acesso.
          </ThemedText>

          <ThemedText style={styles.infoText}>
            Conhecer esses espaços é o primeiro
            passo para aproveitar tudo o que eles
            podem oferecer.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 24,
    gap: 20,
  },
  subtitle: {
    color: '#5D87B7',
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '600',
  },
  title: {
    color: '#173B70',
    fontSize: 32,
    lineHeight: 38,
  },
  description: {
    color: '#52647A',
    fontSize: 16,
    lineHeight: 25,
  },
  card: {
    backgroundColor: '#173B70',
    padding: 24,
    borderRadius: 18,
    gap: 14,
  },
  cardNumber: {
    color: '#A9B7C6',
    fontSize: 12,
    letterSpacing: 2,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  cardText: {
    color: '#E9EDF3',
    fontSize: 15,
    lineHeight: 23,
  },
  info: {
    backgroundColor: '#E9EDF3',
    padding: 22,
    borderRadius: 18,
    gap: 10,
  },
  infoTitle: {
    color: '#173B70',
    fontSize: 18,
    fontWeight: '600',
  },
  infoText: {
    color: '#52647A',
    fontSize: 14,
    lineHeight: 22,
  },
});
