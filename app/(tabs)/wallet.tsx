import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Theme';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>我的钱包</Text>
      </View> */}
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>资产列表</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>总资产</Text>
            <Text style={styles.cardValue}>$25,373.22</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>交易历史</Text>
          <View style={styles.transactionItem}>
            <View>
              <Text style={styles.transactionTitle}>收到 BTC</Text>
              <Text style={styles.transactionDate}>2023-06-15 14:30</Text>
            </View>
            <Text style={[styles.transactionAmount, styles.positive]}>+0.0025 BTC</Text>
          </View>
          <View style={styles.transactionItem}>
            <View>
              <Text style={styles.transactionTitle}>发送 ETH</Text>
              <Text style={styles.transactionDate}>2023-06-10 09:15</Text>
            </View>
            <Text style={[styles.transactionAmount, styles.negative]}>-0.5 ETH</Text>
          </View>
          <View style={styles.transactionItem}>
            <View>
              <Text style={styles.transactionTitle}>购买 USDT</Text>
              <Text style={styles.transactionDate}>2023-06-05 16:45</Text>
            </View>
            <Text style={[styles.transactionAmount, styles.positive]}>+500 USDT</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: Colors.card,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    color: Colors.text + '99',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
  },
  transactionDate: {
    fontSize: 12,
    color: Colors.text + '99',
    marginTop: 4,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
  positive: {
    color: Colors.green[500],
  },
  negative: {
    color: Colors.notification,
  },
});