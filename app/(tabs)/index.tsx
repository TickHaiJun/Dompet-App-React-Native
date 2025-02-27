import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Theme";
import { CryptoIcons, UserAvatars } from "@/assets/images/crypto";

// 样式组件定义
const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

// 使用styled-components包装LinearGradient组件
const GradientBackground = styled(LinearGradient)`
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
`;

// 修改WalletCard为普通View组件
const WalletCard = styled.View`
  width: 100%;
  background: linear-gradient(135deg, #0047ab, #1e40af);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
`;

const WalletHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const WalletTitle = styled.Text`
  color: ${Colors.text};
  font-size: 18px;
  font-weight: 500;
`;

const WalletBalance = styled.Text`
  color: ${Colors.text};
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const WalletSubtext = styled.Text`
  color: ${Colors.text}99;
  font-size: 14px;
`;

const ActionButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
  gap: 32px;
`;

const ActionButton = styled.TouchableOpacity`
  align-items: center;
`;

const ActionButtonIcon = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const ActionButtonText = styled.Text`
  color: ${Colors.text};
  font-size: 12px;
  font-weight: 500;
`;

const SectionTitle = styled.Text`
  color: ${Colors.text};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ContactsContainer = styled.View`
  margin-bottom: 24px;
`;

const ContactsScrollView = styled.ScrollView`
  margin-left: -16px;
  margin-right: -16px;
  padding-left: 16px;
`;

const ContactItem = styled.TouchableOpacity`
  align-items: center;
  margin-right: 24px;
`;

const ContactAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-bottom: 8px;
`;

const ContactName = styled.Text`
  color: ${Colors.text};
  font-size: 12px;
  text-align: center;
`;

const AssetsContainer = styled.View`
  margin-bottom: 16px;
`;

const AssetItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background-color: ${Colors.card};
  border-radius: 12px;
  margin-bottom: 12px;
`;

const AssetIcon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const AssetInfo = styled.View`
  flex: 1;
  margin-left: 16px;
`;

const AssetName = styled.Text`
  color: ${Colors.text};
  font-size: 16px;
  font-weight: 600;
`;

const AssetBalance = styled.Text`
  color: ${Colors.text}99;
  font-size: 14px;
`;

const AssetPriceInfo = styled.View`
  align-items: flex-end;
`;

const AssetPrice = styled.Text`
  color: ${Colors.text};
  font-size: 16px;
  font-weight: 500;
`;

const AssetChange = styled.Text`
  color: ${(props) =>
    props.isPositive ? Colors.green[500] : Colors.notification};
  font-size: 14px;
`;

// 导入全局状态管理（简化版）
// 在实际应用中，应该使用Context API、Redux或其他状态管理库
import { globalWalletBalance } from '@/app/buy-crypto';
const btcAmount = 0.00335;
const btcChange = 6.54;
const contacts = [
  { id: "1", name: "Maria", avatar: UserAvatars.Maria },
  { id: "2", name: "Philips", avatar: UserAvatars.Philips },
  { id: "3", name: "Angel", avatar: UserAvatars.Angel },
  { id: "4", name: "Kierra", avatar: UserAvatars.Kierra },
  { id: "5", name: "Davis", avatar: UserAvatars.Davis },
  { id: "6", name: "Herwitz", avatar: UserAvatars.Herwitz },
];

const assets = [
  {
    id: "1",
    symbol: "BTC",
    name: "Bitcoin",
    balance: 0.5423,
    price: 44826.12,
    change: 2.35,
    icon: CryptoIcons.BTC,
  },
  {
    id: "2",
    symbol: "ETH",
    name: "Ethereum",
    balance: 4.2,
    price: 1542.3,
    change: -1.24,
    icon: CryptoIcons.ETH,
  },
  {
    id: "3",
    symbol: "USDT",
    name: "Tether",
    balance: 1250,
    price: 1.0,
    change: 0.01,
    icon: CryptoIcons.USDT,
  },
  {
    id: "4",
    symbol: "MATIC",
    name: "Polygon",
    balance: 1520,
    price: 0.58,
    change: 3.45,
    icon: CryptoIcons.MATIC,
  },
];

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="light" />

      {/* Wallet Card */}
      <GradientBackground
        colors={['#0047ab', '#1e40af']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <WalletHeader>
          <WalletTitle>Current Wallet Balance</WalletTitle>
          <TouchableOpacity>
            <Ionicons name="eye-outline" size={24} color={Colors.text} />
          </TouchableOpacity>
        </WalletHeader>
        <WalletBalance>${globalWalletBalance.toLocaleString()}</WalletBalance>
        <WalletSubtext>
          BTC: {btcAmount}{" "}
          <Ionicons name="arrow-up" size={12} color={Colors.green[500]} /> +
          {btcChange}%
        </WalletSubtext>

        {/* Action Buttons */}
        <ActionButtonsContainer>
          <ActionButton>
            <ActionButtonIcon>
              <Ionicons name="arrow-up" size={24} color="white" />
            </ActionButtonIcon>
            <ActionButtonText>Send</ActionButtonText>
          </ActionButton>
          <ActionButton>
            <ActionButtonIcon>
              <Ionicons name="arrow-down" size={24} color="white" />
            </ActionButtonIcon>
            <ActionButtonText>Receive</ActionButtonText>
          </ActionButton>
          <ActionButton onPress={() => router.push('/buy-crypto')}>
            <ActionButtonIcon>
              <Ionicons name="add" size={24} color="white" />
            </ActionButtonIcon>
            <ActionButtonText>Buy</ActionButtonText>
          </ActionButton>
        </ActionButtonsContainer>
      </GradientBackground>

      {/* Contacts */}
      <ContactsContainer>
        <ContactsScrollView horizontal showsHorizontalScrollIndicator={false}>
          {contacts.map((contact) => (
            <ContactItem key={contact.id}>
              <ContactAvatar source={{ uri: contact.avatar }} />
              <ContactName>{contact.name}</ContactName>
            </ContactItem>
          ))}
        </ContactsScrollView>
      </ContactsContainer>

      {/* My Portfolio */}
      <AssetsContainer>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <SectionTitle>My Portfolio</SectionTitle>
          <TouchableOpacity>
            <Text style={{ color: Colors.primary, fontSize: 14 }}>
              View All »
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <AssetItem
            style={{ flex: 1, marginRight: 8 }}
            onPress={() => router.push(`/crypto/BTC`)}
          >
            <AssetIcon source={{ uri: CryptoIcons.BTC }} />
            <AssetInfo>
              <AssetName>Bitcoin</AssetName>
              <AssetBalance>BTC</AssetBalance>
            </AssetInfo>
            <AssetPriceInfo>
              <AssetPrice>3.200125</AssetPrice>
              <AssetChange isPositive={true}>2.35% ↑</AssetChange>
            </AssetPriceInfo>
          </AssetItem>

          <AssetItem
            style={{ flex: 1, marginLeft: 8 }}
            onPress={() => router.push(`/crypto/ETH`)}
          >
            <AssetIcon source={{ uri: CryptoIcons.ETH }} />
            <AssetInfo>
              <AssetName>Ethereum</AssetName>
              <AssetBalance>ETH</AssetBalance>
            </AssetInfo>
            <AssetPriceInfo>
              <AssetPrice>124.3356</AssetPrice>
              <AssetChange isPositive={true}>2.35% ↑</AssetChange>
            </AssetPriceInfo>
          </AssetItem>
        </View>
      </AssetsContainer>

      {/* Market */}
      <AssetsContainer>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <SectionTitle>Market</SectionTitle>
          <TouchableOpacity>
            <Text style={{ color: Colors.primary, fontSize: 14 }}>
              View All »
            </Text>
          </TouchableOpacity>
        </View>

        <AssetItem onPress={() => router.push(`/crypto/USDT`)}>
          <AssetIcon source={{ uri: CryptoIcons.USDT }} />
          <AssetInfo>
            <AssetName>Tether</AssetName>
            <AssetBalance>USDT</AssetBalance>
          </AssetInfo>
          <AssetPriceInfo>
            <AssetPrice>$1.00</AssetPrice>
            <AssetChange isPositive={true}>0.02%</AssetChange>
          </AssetPriceInfo>
        </AssetItem>

        <AssetItem onPress={() => router.push(`/crypto/MATIC`)}>
          <AssetIcon source={{ uri: CryptoIcons.MATIC }} />
          <AssetInfo>
            <AssetName>Polygon</AssetName>
            <AssetBalance>MATIC</AssetBalance>
          </AssetInfo>
          <AssetPriceInfo>
            <AssetPrice>$0.09152</AssetPrice>
            <AssetChange isPositive={true}>8.26%</AssetChange>
          </AssetPriceInfo>
        </AssetItem>

        <AssetItem onPress={() => router.push(`/crypto/SHIB`)}>
          <AssetIcon source={{ uri: CryptoIcons.SHIB }} />
          <AssetInfo>
            <AssetName>Shiba Inu</AssetName>
            <AssetBalance>SHIB</AssetBalance>
          </AssetInfo>
          <AssetPriceInfo>
            <AssetPrice>$0.00001156</AssetPrice>
            <AssetChange isPositive={true}>3.45%</AssetChange>
          </AssetPriceInfo>
        </AssetItem>
      </AssetsContainer>
    </>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "white",
  },
});
