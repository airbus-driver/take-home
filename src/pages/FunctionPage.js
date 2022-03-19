import React, { useMemo } from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

import FunctionForm from './FunctionForm';

const Container = styled.div`
  padding: 20px;
  width: 400px;
`;

const FunctionPage = () => {
  const formData = useMemo(() => ({
    name: {
      label: 'Function Name',
      type: 'textBoxValidator',
      default: '',
      required: true,
      model: 'metadata.name',
      validationRules: [
        { label: 'Valid characters: a–z, 0–9, –', expression: '^[a-z0-9-]*$' },
        { label: 'Must begin with: a–z, 0–9', expression: '^[a-z0-9]' },
        { label: 'Must end with: a–z, 0–9', expression: '^.*[a-z0-9]$' },
        { label: 'Max length: 56', expression: '^(?=.{0,56}$).*$' },
      ],
    },
    description: {
      label: 'Description',
      type: 'textarea',
      default: '',
      model: 'spec.description',
    },
    runtime: {
      label: 'Runtime',
      type: 'select',
      default: 'python:3.9',
      model: 'spec.runtime',
      options: [
        { label: 'Go', value: 'golang' },
        { label: 'Java', value: 'java' },
        { label: 'NodeJs', value: 'nodejs' },
        { label: 'Python 3.7', value: 'python:3.7' },
        { label: 'Python 3.9', value: 'python:3.9' },
      ],
    },
    categories: {
      label: 'Categories',
      type: 'checkBoxList',
      default: [],
      model: 'metadata.categories',
      options: [
        { label: 'Data Collection', value: 'collect' },
        { label: 'Data Processing', value: 'process' },
        { label: 'Analytics & Reporting', value: 'report' },
        { label: 'Sorting, filtering, tagging', value: 'sort' },
      ],
    },
    service: {
      label: 'Service Name',
      type: 'textBoxValidator',
      default: '',
      required: true,
      model: 'spec.serviceName',
      validationRules: [
        { label: 'Valid characters: a–z, 0–9, –', expression: '^[a-z0-9-]*$' },
        { label: 'Must begin with: a–z', expression: '^[a-z]' },
        { label: 'Must end with: a–z, 0-9', expression: '^.*[a-z0-9]$' },
        { label: 'Max length: 53', expression: '^(?=.{0,53}$).*$' },
      ],
    },
    permissions: {
      label: 'Permissions',
      type: 'checkBoxList',
      default: ['read'],
      required: true,
      model: 'spec.permissions',
      options: [
        { label: 'Read files', value: 'read' },
        { label: 'Write files', value: 'write' },
        { label: 'Execute files', value: 'execute' },
      ],
    },
  }), []);

  const handleSubmit = (payload) => {
    const newObj = {};
    Object.keys(payload).forEach(key => {
      const field = formData[key]?.model;
      _.set(newObj, field, payload[key]);
    });
    console.log(newObj);
  };

  return (
    <Container>
      <h4>Create New Function</h4>
      <FunctionForm data={formData} onSubmit={handleSubmit} />
    </Container>
  );
};

export default FunctionPage;
