import React from 'react';
// import { useHistory } from 'react-router-dom';

import { Col, Row, List } from 'antd';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';

import './index.less';
import { Link } from 'react-router-dom';

const PatientList = ({ patients }) => {
  // const history = useHistory();



  // TODO: import patient & manage Avatar display with sex 

  return (
    <div className="patientListContainer">
      <Row>
        <Col span={24}>
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
        </Col>
      </Row>
    </div>
  );
}

export default PatientList;