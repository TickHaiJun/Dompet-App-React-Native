// 从tailwind配置中提取的主题颜色
export const Colors = {
  primary: '#3B82F6',
  secondary: '#10B981',
  background: '#0F172A',
  card: '#1E293B',
  text: '#F8FAFC',
  border: '#334155',
  notification: '#EF4444',
  green: {
    500: '#10B981',
    900: 'rgba(6, 78, 59, 0.3)', // bg-green-900/30 的近似值
  },
  blue: {
    500: '#3B82F6',
  },
};

// 常用的间距值
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

// 字体大小
export const FontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
};

// 字体权重
export const FontWeights = {
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

// 圆角大小
export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// 导出主题对象
export const Theme = {
  colors: Colors,
  spacing: Spacing,
  fontSize: FontSizes,
  fontWeight: FontWeights,
  borderRadius: BorderRadius,
};

export default Theme;