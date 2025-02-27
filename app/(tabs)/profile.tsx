import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Theme';
import { UserAvatars } from '@/assets/images/crypto';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* 头部 */}
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>个人中心</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color={Colors.text} />
        </TouchableOpacity>
      </View> */}
      
      <ScrollView style={styles.content}>
        {/* 用户信息 */}
        <View style={styles.userInfoContainer}>
          <Image 
            source={{ uri: UserAvatars.Herwitz }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>john.doe@example.com</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={20} color={Colors.text} />
          </TouchableOpacity>
        </View>
        
        {/* 账户信息 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>账户信息</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="wallet-outline" size={24} color={Colors.primary} style={styles.menuIcon} />
                <Text style={styles.menuText}>我的钱包</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.text + '99'} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="card-outline" size={24} color={Colors.secondary} style={styles.menuIcon} />
                <Text style={styles.menuText}>支付方式</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.text + '99'} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="time-outline" size={24} color="#9333EA" style={styles.menuIcon} />
                <Text style={styles.menuText}>交易历史</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.text + '99'} />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* 安全设置 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>安全设置</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="lock-closed-outline" size={24} color="#F97316" style={styles.menuIcon} />
                <Text style={styles.menuText}>修改密码</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.text + '99'} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="finger-print-outline" size={24} color="#10B981" style={styles.menuIcon} />
                <Text style={styles.menuText}>生物识别</Text>
              </View>
              <View style={styles.switchContainer}>
                <View style={[styles.switch, styles.switchActive]} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="shield-checkmark-outline" size={24} color="#3B82F6" style={styles.menuIcon} />
                <Text style={styles.menuText}>两步验证</Text>
              </View>
              <View style={styles.switchContainer}>
                <View style={styles.switch} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* 其他选项 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>其他</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="help-circle-outline" size={24} color="#6366F1" style={styles.menuIcon} />
                <Text style={styles.menuText}>帮助中心</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.text + '99'} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="document-text-outline" size={24} color="#8B5CF6" style={styles.menuIcon} />
                <Text style={styles.menuText}>条款与隐私</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.text + '99'} />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
              <View style={styles.menuItemLeft}>
                <Ionicons name="log-out-outline" size={24} color={Colors.notification} style={styles.menuIcon} />
                <Text style={[styles.menuText, styles.logoutText]}>退出登录</Text>
              </View>
            </TouchableOpacity>
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
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userInfo: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: Colors.text + '99',
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: Colors.text,
  },
  switchContainer: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.background,
    padding: 2,
  },
  switch: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.border,
  },
  switchActive: {
    backgroundColor: Colors.green[500],
    marginLeft: 'auto',
  },
  logoutButton: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: Colors.notification,
  },
});