import React from 'react';
import WorkItemDetail from '../../components/WorkItemDetail';
import CONTENT from '../content/content';
import Layout from '../../components/Layout';

export default () => (
    <Layout title="My Work - Arundel">
        <WorkItemDetail {...CONTENT.ADL} />
    </Layout>
);
