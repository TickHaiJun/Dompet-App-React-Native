# 🚀 Crypto Wallet App 
![Example Image](img/1.png)

供学习ReactNative 使用

<video width="640" height="360" controls>
  <source src="video/1.mp4" type="video/mp4">

</video>

一款现代化、功能丰富的加密货币钱包应用，提供直观的用户界面和全面的加密货币管理功能页面。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-green.svg)
![Expo](https://img.shields.io/badge/expo-v52.0-blue.svg)

## ✨ 功能特点

### 💰 资产管理
- 实时查看钱包余额和资产分布
- 支持多种加密货币（BTC、ETH、USDT等）
- 资产价格实时更新和变化趋势显示

### 💱 交易功能
- 发送和接收加密货币
- 加密货币购买功能
- 币种兑换（Swap）功能，支持不同币种间的快速转换

### 📊 市场行情
- 加密货币详情页面，展示价格、市值等关键信息
- 价格图表和历史数据展示
- 多时间范围（1小时、1天、1周、1月、1年）数据查看

### 👤 个人资料
- 用户个人信息管理
- 交易历史记录
- 联系人管理功能

### 📚 学习中心
- 加密货币知识学习资源
- 区块链技术介绍

## 🛠️ 技术栈

### 前端框架
- **React Native**: 跨平台移动应用开发框架
- **Expo**: 简化React Native开发的工具和服务平台
- **Expo Router**: 基于文件系统的路由解决方案

### UI/UX
- **Styled Components**: CSS-in-JS解决方案，用于组件样式管理
- **Expo Vector Icons**: 丰富的图标库
- **React Native Reanimated**: 高性能动画库
- **Expo Blur**: 实现模糊效果
- **Expo Haptics**: 触觉反馈功能

### 状态管理
- 自定义状态管理解决方案
- 组件间数据共享

## 💻 安装与运行

### 前提条件
- Node.js (v14.0+)
- npm 或 yarn
- Expo CLI

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/yourusername/crypto-wallet-app.git
cd crypto-wallet-app
```

2. 安装依赖
```bash
npm install
```

3. 启动应用
```bash
npx expo start
```

## 🔧 技术难点与解决方案

### 1. 实时价格更新
- 实现了高效的数据获取和更新机制
- 优化了UI渲染性能，确保价格变化时界面流畅更新

### 2. 自适应UI设计
- 使用Styled Components实现了主题切换和自适应布局
- 针对不同设备尺寸优化了用户界面

### 3. 交易安全性
- 实现了安全的交易确认流程
- 数据验证和错误处理机制

### 4. 性能优化
- 组件懒加载和代码分割
- 使用React Native Reanimated提升动画性能
- 实现了ParallaxScrollView等自定义组件提升用户体验

## 📱 应用截图
| 标题  |                                                                                                                                                                                              图片1                                                                                                                                                                                               |                                                                                                                                                                                              图片2                                                                                                                                                                                               |
| :---: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       |  ![k1.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/cabdd8ae31fa4efe89b9b83de4dcc120~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56iL5bqP5ZGY5rW35Yab:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTIzOTkwNDg0ODcxMzU5MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1740786547&x-orig-sign=zt1xiAt4TrOf4GLEud6EnECvkEE%3D)  | ![k2.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/fe31a15fd2eb4dbdb528631c8a28c39e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56iL5bqP5ZGY5rW35Yab:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTIzOTkwNDg0ODcxMzU5MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1740786565&x-orig-sign=PBfdWGnIm%2BADmi3qNw2FzvEj6Ow%3D) |
|       | ![k3.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2f659bc0bedf420494706d8ddd1e5699~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56iL5bqP5ZGY5rW35Yab:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTIzOTkwNDg0ODcxMzU5MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1740786608&x-orig-sign=esVTjc34%2FTS0dVa1TNNnUTpBTSg%3D) |  ![k4.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/7461328fe7a542e18bf8befea863d9f2~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56iL5bqP5ZGY5rW35Yab:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTIzOTkwNDg0ODcxMzU5MiJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1740786622&x-orig-sign=Xfazq8cTwPKQHW07M6eSZxfyars%3D)  |


## 🤝 贡献指南



1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 📄 许可证

本项目采用MIT许可证 - 详情请参阅 [LICENSE](LICENSE) 文件

## 📞 联系方式

项目维护者 - [@yourusername](https://github.com/yourusername)
[img/k4.png](https://img-hello-world.oss-cn-beijing.aliyuncs.com/imgs/c95cfc940e64c8f034898e884d64ec28.jpg)


