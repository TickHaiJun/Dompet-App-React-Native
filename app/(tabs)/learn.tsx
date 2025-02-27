import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Theme';

export default function LearnScreen() {
  // 模拟学习内容数据
  const learningItems = [
    {
      id: '1',
      title: '什么是区块链？',
      description: '了解区块链技术的基础知识和应用场景',
      duration: '5 分钟',
      level: '初级',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=200'
    },
    {
      id: '2',
      title: '加密货币交易基础',
      description: '学习如何安全地进行加密货币交易',
      duration: '8 分钟',
      level: '中级',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=200'
    },
    {
      id: '3',
      title: 'DeFi 入门指南',
      description: '探索去中心化金融的世界',
      duration: '10 分钟',
      level: '中级',
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=200'
    },
    {
      id: '4',
      title: 'NFT 市场解析',
      description: '了解非同质化代币及其价值',
      duration: '7 分钟',
      level: '初级',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=200'
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* 头部 */}
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>学习中心</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View> */}
      
      <ScrollView style={styles.content}>
        {/* 推荐课程 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>推荐课程</Text>
          <View style={styles.featuredCourse}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600' }}
              style={styles.featuredImage}
            />
            <View style={styles.featuredOverlay}>
              <View style={styles.featuredBadge}>
                <Text style={styles.featuredBadgeText}>热门</Text>
              </View>
              <Text style={styles.featuredTitle}>区块链技术入门</Text>
              <Text style={styles.featuredDescription}>从零开始了解区块链技术的基本原理和应用</Text>
              <View style={styles.featuredMeta}>
                <Text style={styles.featuredMetaText}>12 课时 · 45 分钟</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* 学习内容列表 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>最新课程</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>查看全部</Text>
            </TouchableOpacity>
          </View>
          
          {learningItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.courseItem}>
              <Image source={{ uri: item.image }} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseDescription} numberOfLines={2}>{item.description}</Text>
                <View style={styles.courseMeta}>
                  <Text style={styles.courseMetaText}>{item.duration}</Text>
                  <View style={styles.levelBadge}>
                    <Text style={styles.levelText}>{item.level}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  viewAllText: {
    color: Colors.primary,
    fontSize: 14,
  },
  featuredCourse: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  featuredOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 16,
    justifyContent: 'flex-end',
  },
  featuredBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: Colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  featuredBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  featuredTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuredDescription: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginBottom: 8,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredMetaText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },
  courseItem: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  courseImage: {
    width: 100,
    height: 100,
  },
  courseInfo: {
    flex: 1,
    padding: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 14,
    color: Colors.text + '99',
    marginBottom: 8,
  },
  courseMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  courseMetaText: {
    fontSize: 12,
    color: Colors.text + '99',
  },
  levelBadge: {
    backgroundColor: Colors.secondary + '33',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  levelText: {
    fontSize: 12,
    color: Colors.secondary,
  },
});