import React, { useEffect, useState } from 'react';
import { Modal, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

const STORAGE_KEY = 'disclaimer_acknowledged';

const DisclaimerModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem(STORAGE_KEY);
    if (!acknowledged) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setOpen(false);
  };

  return (
    <Modal
      title={
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ExclamationCircleOutlined style={{ color: '#faad14', fontSize: 20 }} />
          重要声明
        </span>
      }
      open={open}
      onOk={handleClose}
      onCancel={handleClose}
      cancelButtonProps={{ style: { display: 'none' } }}
      okText="我知道了"
      centered
      width={520}
    >
      <Paragraph style={{ fontSize: 15, marginBottom: 12 }}>
        本站为<Text strong>个人学习开发项目</Text>，仅供技术学习与交流使用。
      </Paragraph>
      <Paragraph style={{ fontSize: 15, marginBottom: 12 }}>
        本网站<Text strong>不涉及任何商业利益及金钱收益</Text>，所展示的医疗信息仅供参考，不具备医学权威性。
      </Paragraph>
      <Paragraph style={{ fontSize: 15, marginBottom: 4, color: '#ff4d4f' }}>
        请勿将本网站内容用于实际医疗诊断或治疗决策。
      </Paragraph>
    </Modal>
  );
};

export default DisclaimerModal;
