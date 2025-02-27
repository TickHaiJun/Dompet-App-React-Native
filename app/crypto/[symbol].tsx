import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import styled, { css } from 'styled-components/native';

// 导入加密货币图标
import { CryptoIcons } from '@/assets/images/crypto';

// 导入主题
import { Colors } from '@/constants/Theme';

// 样式组件定义
const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

const ContentScrollView = styled.ScrollView`
  flex: 1;
`;

const CryptoInfoHeader = styled.View`
  padding: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  flex-direction: row;
  align-items: center;
`;

const CryptoIcon = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const CryptoNameContainer = styled.View`
  margin-left: 16px;
`;

const CryptoNameText = styled.Text`
  font-size: 24px;
  color: ${Colors.text};
  font-weight: bold;
`;

const PriceContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
`;

const PriceText = styled.Text`
  font-size: 36px;
  color: ${Colors.text};
  font-weight: bold;
`;

const ChangeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

const ChangeBadge = styled.View`
  background-color: rgba(6, 78, 59, 0.3);
  padding: 4px 8px;
  border-radius: 4px;
`;

const ChangeText = styled.Text`
  color: ${Colors.green[500]};
  font-weight: 500;
`;

const ChartContainer = styled.View`
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

const ChartView = styled.View`
  height: 240px;
  background-color: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  overflow: hidden;
`;

const ChartContent = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
`;

const ChartLine = styled.View<{opacity: string}>`
  position: absolute;
  bottom: ${props => props.opacity === '30' ? '25%' : props.opacity === '20' ? '50%' : '75%'};
  left: 0;
  right: 0;
  height: 160px;
  border-top-width: 1px;
  border-top-color: rgba(59, 130, 246, ${props => Number(props.opacity) / 100});
`;

const PricePoint = styled.View`
  position: absolute;
  top: 33%;
  left: 25%;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${Colors.blue[500]};
`;

const PricePointText = styled.Text`
  position: absolute;
  top: 33%;
  left: 25%;
  font-size: 12px;
  color: ${Colors.blue[500]};
  margin-top: 12px;
`;

const TimeRangeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

const TimeRangeButton = styled.TouchableOpacity<{isSelected: boolean}>`
  padding: 8px 16px;
  border-radius: 9999px;
  ${props => props.isSelected && css`
    background-color: rgba(59, 130, 246, 0.2);
  `}
`;

const TimeRangeText = styled.Text<{isSelected: boolean}>`
  color: ${props => props.isSelected ? Colors.blue[500] : `${Colors.text}99`};
  ${props => props.isSelected && css`
    font-weight: bold;
  `}
`;

const StatsContainer = styled.View`
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

const StatsTitle = styled.Text`
  font-size: 20px;
  color: ${Colors.text};
  font-weight: bold;
  margin-bottom: 16px;
`;

const StatItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.border};
`;

const StatLabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StatLabelText = styled.Text`
  color: ${Colors.text};
`;

const StatInfoIcon = styled.Text`
  color: ${Colors.text}99;
  margin-left: 4px;
`;

const StatValueText = styled.Text`
  color: ${Colors.text};
  font-weight: 500;
`;

const BackButton = styled.TouchableOpacity`
  margin-right: 16px;
`;

const BackButtonText = styled.Text`
  color: white;
  font-size: 24px;
`;

const MenuButton = styled.TouchableOpacity`
  margin-left: 16px;
`;

const MenuButtonText = styled.Text`
  color: white;
  font-size: 24px;
`;

/**
 * 加密货币详情页面组件
 * 显示特定加密货币的详细信息、价格图表和统计数据
 */
export default function CryptoDetailScreen() {
  // 获取路由参数中的加密货币符号
  const { symbol } = useLocalSearchParams();
  
  // 根据符号获取加密货币数据
  // 在实际应用中，这些数据应该从API获取
  const cryptoData = getCryptoData(symbol as string);
  
  // 时间范围选项
  const timeRanges = ['1h', '1d', '1w', '1m', '1y'];
  const [selectedTimeRange, setSelectedTimeRange] = React.useState('1d');
  
  return (
    <Container>
      <StatusBar style="light" />
      
      {/* 头部导航栏 */}
      <Stack.Screen 
        options={{
          headerShown: true,
          headerTitle: symbol as string,
          headerTitleStyle: { color: 'white' },
          headerStyle: { backgroundColor: '#0F172A' },
          headerLeft: () => (
            <BackButton onPress={() => router.back()}>
              <BackButtonText>←</BackButtonText>
            </BackButton>
          ),
          headerRight: () => (
            <MenuButton>
              <MenuButtonText>☰</MenuButtonText>
            </MenuButton>
          ),
        }}
      />
      
      <ContentScrollView>
        {/* 加密货币信息头部 */}
        <CryptoInfoHeader>
          <CryptoIcon 
            source={{ uri: cryptoData.icon }} 
          />
          <CryptoNameContainer>
            <CryptoNameText>{symbol}</CryptoNameText>
          </CryptoNameContainer>
        </CryptoInfoHeader>
        
        {/* 价格信息 */}
        <PriceContainer>
          <PriceText>${cryptoData.price.toLocaleString()}</PriceText>
          <ChangeContainer>
            <ChangeBadge>
              <ChangeText>{cryptoData.change}% ↑</ChangeText>
            </ChangeBadge>
          </ChangeContainer>
        </PriceContainer>
        
        {/* 价格图表 */}
        <ChartContainer>
          {/* 这里应该是实际的图表组件，这里用一个简单的View模拟 */}
          <ChartView>
            {/* 模拟图表线 */}
            <ChartContent>
              <ChartLine opacity="30" />
              <ChartLine opacity="20" />
              <ChartLine opacity="10" />
              
              {/* 模拟价格点 */}
              <PricePoint />
              <PricePointText>${cryptoData.pricePoint}</PricePointText>
            </ChartContent>
          </ChartView>
          
          {/* 时间范围选择器 */}
          <TimeRangeContainer>
            {timeRanges.map((range) => (
              <TimeRangeButton 
                key={range}
                onPress={() => setSelectedTimeRange(range)}
                isSelected={selectedTimeRange === range}
              >
                <TimeRangeText 
                  isSelected={selectedTimeRange === range}
                >
                  {range}
                </TimeRangeText>
              </TimeRangeButton>
            ))}
          </TimeRangeContainer>
        </ChartContainer>
        
        {/* 统计数据 */}
        <StatsContainer>
          <StatsTitle>Statics</StatsTitle>
          
          <StatItem label="Current Price" value={`${cryptoData.currentPrice} $`} />
          <StatItem label="Market Cap" value={`${cryptoData.marketCap} $`} />
          <StatItem label="Volume 24h" value={`${cryptoData.volume24h} $`} />
          <StatItem label="Available Supply" value={cryptoData.availableSupply.toString()} />
          <StatItem label="Max Supply" value={cryptoData.maxSupply.toString()} />
        </StatsContainer>
      </ContentScrollView>
    </Container>
  );
}

/**
 * 统计项组件 - 显示标签和值的行
 */
function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <StatItemContainer>
      <StatLabelContainer>
        <StatLabelText>{label}</StatLabelText>
        <StatInfoIcon>ⓘ</StatInfoIcon>
      </StatLabelContainer>
      <StatValueText>{value}</StatValueText>
    </StatItemContainer>
  );
}

/**
 * 根据符号获取加密货币数据
 * 在实际应用中，这些数据应该从API获取
 */
function getCryptoData(symbol: string) {
  // 模拟数据
  const data = {
    BTC: {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 21869.10,
      pricePoint: 44.23454,
      change: 2.35,
      icon: CryptoIcons.BTC,
      currentPrice: 44826.12,
      marketCap: 836819,
      volume24h: 35867,
      availableSupply: 18784,
      maxSupply: 21000,
    },
    ETH: {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1542.30,
      pricePoint: 1542.30,
      change: 2.35,
      icon: CryptoIcons.ETH,
      currentPrice: 1542.30,
      marketCap: 185723,
      volume24h: 12456,
      availableSupply: 120450,
      maxSupply: 0,
    },
    // 其他加密货币数据...
  };
  
  // 返回请求的加密货币数据，如果不存在则返回默认数据
  return data[symbol as keyof typeof data] || data.BTC;
}