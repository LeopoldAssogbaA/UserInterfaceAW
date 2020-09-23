import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';

import './index.less';

const PatientList = ({ patients }) => {

  return (
    <div className="patientListContainer">
      <div className="listContainer">
        <List
          itemLayout="horizontal"
          bordered
          dataSource={patients}
          renderItem={(item, i) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.sex === "m" ? <ManOutlined /> : <WomanOutlined />}
                title={<Link to={`/patientCard/${i}`}> {item.firstName} {item.lastName} </Link>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default PatientList;