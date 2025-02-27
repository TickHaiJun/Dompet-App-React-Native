import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Theme';

// 全局状态管理（简化版）
// 在实际应用中，应该使用Context API、Redux或其他状态管理库
export let globalWalletBalance = 25373.22;

export default function BuyCryptoScreen() {
  const [amount, setAmount] = useState('120');
  const [btcAmount, setBtcAmount] = useState('0.004564');
  
  // 处理数字键盘输入
  const handleNumberPress = (num: string) => {
    if (amount === '0' && num === '0') return;
    
    if (amount === '0') {
      setAmount(num);
    } else {
      setAmount(amount + num);
    }
    
    // 模拟计算BTC数量（实际应用中应该使用实时汇率）
    const usdAmount = parseFloat(amount + num) || 0;
    const calculatedBtc = (usdAmount / 26300).toFixed(6); // 假设BTC价格为$26,300
    setBtcAmount(calculatedBtc);
  };
  
  // 处理删除按钮
  const handleDelete = () => {
    if (amount.length > 1) {
      const newAmount = amount.slice(0, -1);
      setAmount(newAmount);
      
      // 更新BTC数量
      const usdAmount = parseFloat(newAmount) || 0;
      const calculatedBtc = (usdAmount / 26300).toFixed(6);
      setBtcAmount(calculatedBtc);
    } else {
      setAmount('0');
      setBtcAmount('0');
    }
  };
  
  // 处理Next按钮点击
  const handleNext = () => {
    // 更新全局钱包余额
    globalWalletBalance += parseFloat(amount);
    
    // 返回首页
    router.replace('/(tabs)');
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* 头部导航栏 */}
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Buy BTC',
          headerTitleStyle: { color: 'white' },
          headerStyle: { backgroundColor: '#0F172A' },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Text style={styles.currencyText}>USD</Text>
          ),
        }}
      />
      
      {/* 金额显示区域 */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>US${amount}</Text>
        <Text style={styles.btcText}>≈{btcAmount} BTC</Text>
      </View>
      
      {/* Next按钮 */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
        <Ionicons name="arrow-forward" size={20} color="white" style={styles.nextButtonIcon} />
      </TouchableOpacity>
      
      {/* 数字键盘 */}
      <View style={styles.keypadContainer}>
        <View style={styles.keypadRow}>
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('1')}>
            <Text style={styles.keypadButtonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('2')}>
            <Text style={styles.keypadButtonText}>2</Text>
            <Text style={styles.keypadSubText}>abc</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('3')}>
            <Text style={styles.keypadButtonText}>3</Text>
            <Text style={styles.keypadSubText}>def</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.keypadRow}>
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('4')}>
            <Text style={styles.keypadButtonText}>4</Text>
            <Text style={styles.keypadSubText}>ghi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('5')}>
            <Text style={styles.keypadButtonText}>5</Text>
            <Text style={styles.keypadSubText}>jkl</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('6')}>
            <Text style={styles.keypadButtonText}>6</Text>
            <Text style={styles.keypadSubText}>mno</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.keypadRow}>
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('7')}>
            <Text style={styles.keypadButtonText}>7</Text>
            <Text style={styles.keypadSubText}>pqrs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('8')}>
            <Text style={styles.keypadButtonText}>8</Text>
            <Text style={styles.keypadSubText}>tuv</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('9')}>
            <Text style={styles.keypadButtonText}>9</Text>
            <Text style={styles.keypadSubText}>wxyz</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.keypadRow}>
          <View style={styles.keypadButton} />
          <TouchableOpacity style={styles.keypadButton} onPress={() => handleNumberPress('0')}>
            <Text style={styles.keypadButtonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton} onPress={handleDelete}>
            <Ionicons name="backspace-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backButton: {
    marginLeft: 8,
  },
  currencyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 16,
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  amountText: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  btcText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
    marginTop: 8,
  },
  nextButton: {
    backgroundColor: '#1D4ED8',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
    marginBottom: 40,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  nextButtonIcon: {
    marginLeft: 8,
  },
  keypadContainer: {
    paddingHorizontal: 16,
    marginTop: 'auto',
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  keypadButton: {
    flex: 1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 8,
  },
  keypadButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  keypadSubText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
  },
});