import React from 'react';
import { Layout, Typography } from 'antd';
import styles from './styles.module.less';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer: React.FC = () => {
  return (
    <AntFooter className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <div className={styles.links}>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
              粤ICP备2025440449号
            </a>
          </div>
          <Text type="secondary" style={{ fontSize: 12 }}>
            本站仅供个人学习开发使用，不涉及任何商业利益及金钱收益
          </Text>
        </div>
        <Text type="secondary">
          © 2025 智慧医疗平台. All rights reserved.
        </Text>
      </div>
    </AntFooter>
  );
};

export default Footer;