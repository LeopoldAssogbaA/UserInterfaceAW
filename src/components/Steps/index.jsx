import React from 'react';

import { Col, Divider, Row, Steps } from 'antd';

import './index.less';

const { Step } = Steps;

const StepRender = ({ stepIndex }) => {

  return (
    <div className="stepContainer">
      <Row>
        <Col span={20} offset={2}>
          <Steps size="small" current={stepIndex}>
            <Step title="Nom" />
            <Step title="Genre" />
            <Step title="Confirmation" />
          </Steps>
        </Col>
      </Row>
      <Divider type="horizontal" style={{ minWidth: '50%', width: '50%', marginLeft: '25%' }} />
    </div>
  );
}

export default StepRender;
