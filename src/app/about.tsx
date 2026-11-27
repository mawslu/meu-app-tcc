import { StyleSheet, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.subtitle}>
          SOBRE O NOSSO PROJETO
        </ThemedText>

        <ThemedText type="title" style={styles.title}>
          Entre Páginas e Ruas
        </ThemedText>

        <ThemedText style={styles.description}>
          Informação também é acesso.
        </ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText style={styles.cardTitle}>
            Nossa proposta
          </ThemedText>

          <ThemedText style={styles.text}>
            O Entre Páginas e Ruas é um sistema que busca facilitar o acesso
            às informações sobre bibliotecas e espaços de leitura de Praia
            Grande, aproximando a comunidade desses lugares.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.cardLight}>
          <ThemedText style={styles.cardTitleLight}>
            O que queremos oferecer
          </ThemedText>

          <ThemedText style={styles.textLight}>
            • Localização dos espaços
          </ThemedText>

          <ThemedText style={styles.textLight}>
            • Horários e contatos
          </ThemedText>

          <ThemedText style={styles.textLight}>
            • Serviços e atividades culturais
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.team}>
          <ThemedText style={styles.teamTitle}>
            Desenvolvido por
          </ThemedText>

          <ThemedText style={styles.teamText}>
            Ana Luiza Arruda de Abreu
          </ThemedText>

          <ThemedText style={styles.teamText}>
            Henrique Fernando de Jesus Silva
          </ThemedText>

          <ThemedText style={styles.teamText}>
            Maria Eduarda Xavier Gomes
          </ThemedText>

          <ThemedText style={styles.teamText}>
            Maria Luiza Medrado do Nascimento
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
    fontSize: 30,
  },

  description: {
    color: '#5D87B7',
    fontSize: 20,
    fontWeight: '500',
  },

  card: {
    backgroundColor: '#173B70',
    padding: 24,
    borderRadius: 18,
    gap: 12,
    marginTop: 10,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '600',
  },

  text: {
    color: '#DCE8F5',
    fontSize: 15,
    lineHeight: 24,
  },

  cardLight: {
    backgroundColor: '#E9EDF3',
    padding: 22,
    borderRadius: 18,
    gap: 12,
  },

  cardTitleLight: {
    color: '#173B70',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },

  textLight: {
    color: '#2D3A47',
    fontSize: 15,
    lineHeight: 23,
  },

  team: {
    padding: 20,
    gap: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#5D87B7',
  },

  teamTitle: {
    color: '#173B70',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },

  teamText: {
    color: '#2D3A47',
    fontSize: 14,
  },
});
