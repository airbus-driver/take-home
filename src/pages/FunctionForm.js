import React from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

import { FormField, Label, Button } from '../components';
import components from './types';

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
      {({ values, setFieldValue }) => (
        <Form noValidate>
          {Object.keys(data).map((key, index) => {
            const fieldObj = data[key];
            return (
              <Field
                key={key}
                name={key}
              >
                {({ field }) => {
                  return (
                    <FormField>
                      <Label htmlFor={key}>
                        {fieldObj.required && <b>*</b>}
                        {fieldObj.label}
                      </Label>
                      {React.createElement(components[fieldObj.type], {
                        ...fieldObj,
                        ...field,
                        value: values[key],
                        onFieldChange: (val) => {
                          setFieldValue(key, val);
                        },
                        tabIndex: index + 1,
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
