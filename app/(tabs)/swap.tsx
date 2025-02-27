import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Theme';

export default function SwapScreen() {
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('ETH');
  const [fromAmount, setFromAmount] = useState('0.01');
  const [toAmount, setToAmount] = useState('0.14');
  
  // 模拟兑换计算
  const calculateExchange = (amount: string, from: string, to: string) => {
    // 这里应该是实际的汇率计算，这里只是模拟
    if (from === 'BTC' && to === 'ETH') {
      return (parseFloat(amount) * 14).toFixed(2);
    } else if (from === 'ETH' && to === 'BTC') {
      return (parseFloat(amount) / 14).toFixed(6);
    }
    return amount;
  };
  
  // 处理金额变化
  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    setToAmount(calculateExchange(value, fromCurrency, toCurrency));
  };
  
  // 处理币种切换
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* 头部 */}
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>兑换</Text>
      </View> */}
      
      <ScrollView style={styles.content}>
        {/* 兑换卡片 */}
        <View style={styles.swapCard}>
          {/* 从这个币种 */}
          <View style={styles.currencySection}>
            <Text style={styles.sectionLabel}>从</Text>
            <View style={styles.currencyInputContainer}>
              <TouchableOpacity style={styles.currencySelector}>
                <Text style={styles.currencyCode}>{fromCurrency}</Text>
                <Ionicons name="chevron-down" size={16} color={Colors.text} />
              </TouchableOpacity>
              <TextInput
                style={styles.amountInput}
                value={fromAmount}
                onChangeText={handleFromAmountChange}
                keyboardType="decimal-pad"
              />
            </View>
          </View>
          
          {/* 交换按钮 */}
          <TouchableOpacity style={styles.swapButton} onPress={handleSwapCurrencies}>
            <Ionicons name="swap-vertical" size={24} color={Colors.primary} />
          </TouchableOpacity>
          
          {/* 到这个币种 */}
          <View style={styles.currencySection}>
            <Text style={styles.sectionLabel}>到</Text>
            <View style={styles.currencyInputContainer}>
              <TouchableOpacity style={styles.currencySelector}>
                <Text style={styles.currencyCode}>{toCurrency}</Text>
                <Ionicons name="chevron-down" size={16} color={Colors.text} />
              </TouchableOpacity>
              <TextInput
                style={styles.amountInput}
                value={toAmount}
                editable={false}
              />
            </View>
          </View>
          
          {/* 汇率信息 */}
          <View style={styles.rateInfo}>
            <Text style={styles.rateText}>1 {fromCurrency} ≈ 14 {toCurrency}</Text>
            <Text style={styles.feeText}>费用: 0.5%</Text>
          </View>
        </View>
        
        {/* 兑换按钮 */}
        <TouchableOpacity style={styles.exchangeButton}>
          <Text style={styles.exchangeButtonText}>确认兑换</Text>
        </TouchableOpacity>
        
        {/* 最近兑换记录 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>最近兑换</Text>
          <View style={styles.historyItem}>
            <View>
              <Text style={styles.historyTitle}>BTC → ETH</Text>
              <Text style={styles.historyDate}>2023-06-20 10:15</Text>
            </View>
            <View style={styles.historyAmounts}>
              <Text style={styles.historyFromAmount}>-0.01 BTC</Text>
              <Text style={styles.historyToAmount}>+0.14 ETH</Text>
            </View>
          </View>
          <View style={styles.historyItem}>
            <View>
              <Text style={styles.historyTitle}>ETH → USDT</Text>
              <Text style={styles.historyDate}>2023-06-18 16:30</Text>
            </View>
            <View style={styles.historyAmounts}>
              <Text style={styles.historyFromAmount}>-2.5 ETH</Text>
              <Text style={styles.historyToAmount}>+4,125 USDT</Text>
            </View>
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
  swapCard: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  currencySection: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 14,
    color: Colors.text + '99',
    marginBottom: 8,
  },
  currencyInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  currencyCode: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
  },
  amountInput: {
    flex: 1,
    textAlign: 'right',
    color: Colors.text,
    fontSize: 20,
    fontWeight: '600',
  },
  swapButton: {
    alignSelf: 'center',
    backgroundColor: Colors.background,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -10,
    zIndex: 1,
  },
  rateInfo: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateText: {
    color: Colors.text + '99',
    fontSize: 12,
  },
  feeText: {
    color: Colors.text + '99',
    fontSize: 12,
  },
  exchangeButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  exchangeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
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
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
  },
  historyDate: {
    fontSize: 12,
    color: Colors.text + '99',
    marginTop: 4,
  },
  historyAmounts: {
    alignItems: 'flex-end',
  },
  historyFromAmount: {
    fontSize: 14,
    color: Colors.notification,
  },
  historyToAmount: {
    fontSize: 14,
    color: Colors.green[500],
    marginTop: 4,
  },
});