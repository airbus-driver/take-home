import React from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

import components from './types';

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
`;

const FieldLabel = styled.label`
  margin-bottom: 10px;

  b {
    color: #d32f2f;
  }
`;

const Button = styled.button`
  height: 33px;
  width: 120px;
`;

const ActionButtons = styled.div`
  margin-top: 20px;
`;

const FunctionForm = ({ data, onSubmit }) => {
  const initValues = {};
  Object.keys(data).forEach(key => {
    initValues[key] = data[key]?.default || '';
  });

  const validate = (values) => {
    const errors = {};
    Object.keys(values).forEach(key => {
      const value = values[key];
      if (data[key]?.required && ((Array.isArray(value) && value.length === 0) || !value)) {
        errors[key] = 'Required';
      }
      if (data[key].type === 'textBoxValidator') {
        const isValid = data[key].validationRules.every(rule => {
          const re = new RegExp(rule.expression);
          return re.test(value);
        });
        if (!isValid) {
          errors[key] = 'Invalid value';
        }
      }
    });

    return errors;
  };

  return (
    <Formik
      validateOnChange={true}
      validateOnBlur={true}
      initialValues={initValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ values, errors, touched, isValid, setFieldValue }) => (
        <Form noValidate>
          <pre>{JSON.stringify(values)}</pre>
          <pre>{JSON.stringify(errors)}</pre>
          <pre>{JSON.stringify(touched)}</pre>
          <pre>{JSON.stringify(isValid)}</pre>
          {Object.keys(data).map(key => {
            const fieldObj = data[key];
            return (
              <Field
                key={key}
                name={key}
              >
                {({ field }) => {
                  return (
                    <FormField>
                      <FieldLabel htmlFor={key}>
                        {fieldObj.required && <b>*</b>}
                        {fieldObj.label}
                      </FieldLabel>
                      {React.createElement(components[fieldObj.type], {
                        ...fieldObj,
                        ...field,
                        value: values[key],
                        onFieldChange: (val) => {
                          setFieldValue(key, val);
                        },
                      })}
                    </FormField>
                  );
                }}
              </Field>
            );
          })}
          <ActionButtons>
            <Button type="submit">Create</Button>
          </ActionButtons>
        </Form>
      )}
    </Formik>
  );
};

export default FunctionForm;
