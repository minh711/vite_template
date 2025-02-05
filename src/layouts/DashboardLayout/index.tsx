// src/components/DashboardLayout/DashboardLayout.tsx
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import DashboardHeader from './Header';
import DashboardSider from './Sider';
import DashboardFooter from './Footer';

const { Content } = Layout;

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <DashboardSider />
      <Layout>
        <DashboardHeader />
        <Content className="p-m">
          {children || <div>Welcome to the Dashboard!</div>}
        </Content>
        <DashboardFooter />
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
