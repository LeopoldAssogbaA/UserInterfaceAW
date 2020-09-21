import React from 'react';

import { useHistory } from 'react-router-dom';
import { Col, Row, List } from 'antd';
import { ManOutlined } from '@ant-design/icons';

import './index.less';

const PatientList = ({  }) => {
  const history = useHistory();

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  // TODO: import patient & manage Avatar display with sex 

  return (
    <div className="patientListContainer">
      <Row>
        <Col span={24}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<ManOutlined /> /* <WomanOutlined /> */}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
}

export default PatientList;