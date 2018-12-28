import React from 'react';
import WorkItem from '../../components/WorkItem';

import CONTENT from './content';


export const workItems = [
    <WorkItem {...CONTENT.SI} />,
    <WorkItem {...CONTENT.NM} />,
    <WorkItem {...CONTENT.CDDJ} />,
    <WorkItem {...CONTENT.MMN} />,
    <WorkItem {...CONTENT.ADL} />,
    <WorkItem {...CONTENT.HHR} />,
];
