// core
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
// components
import { Row, Col } from 'antd';
import { GithubOutlined, BarChartOutlined } from '@ant-design/icons';
import ContactForm from '../Forms/ContactForm';
import Captcha from '../Captcha';
// utils
import translate from '../../utils/translations';
import { GITHUB_PAGE } from '../../utils/config';

const Contact = memo(() => {
    const { lang } = useSelector(s => s.ui);

    return (
        <div className="Contact content">
            <Row
                gutter={24}
                type="flex"
                justify="center"
                align="middle"
            >
                <Col
                    lg={7}
                    md={12}
                    xs={24}
                    className="mb-20 align-left mobile-center"
                >
                    <h3>
                        {translate(lang, 'cooperation_ready')}
                    </h3>
                </Col>

                <Col
                    lg={7}
                    xs={12}
                    className="mb-20 align-right mobile-center"
                >
                    <a
                        href={GITHUB_PAGE}
                        className="link"
                        title={`${translate(lang, 'github')}`}
                        target="_blank"
                    >
                        <GithubOutlined /> github
                    </a>
                </Col>

                <ContactForm />
            </Row>
        </div>
    );
});

export default Contact;
