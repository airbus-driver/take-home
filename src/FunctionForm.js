import React from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

import { Select, TextBoxValidator, CheckBoxList } from './components';

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
`;

const FieldLabel = styled.label`
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  padding: 5px;
`;

const Components = {
  textBoxValidator: TextBoxValidator,
  textarea: TextArea,
  select: Select,
  checkBoxList: CheckBoxList,
};

const FunctionForm = ({ data, onSubmit }) => {
  const initValues = {};
  Object.keys(data).forEach(key => {
    initValues[key] = data[key]?.default || '';
  });

  return (
    <Formik
      validateOnChange={true}
      validateOnBlur={false}
      initialValues={initValues}
      onSubmit={onSubmit}
    >
      {({ dirty, values, errors, touched, setFieldValue }) => (
        <Form noValidate>
          <pre>{JSON.stringify(values)}</pre>
          {Object.keys(data).map(key => {
            const fieldObj = data[key];
            return (
              <Field key={key} name={key}>
                {({ field }) => {
                  return (
                    <FormField>
                      <FieldLabel htmlFor="name">{fieldObj.label}</FieldLabel>
                      {React.createElement(Components[fieldObj.type], {
                        ...fieldObj,
                        ...field,
                        value: values[key],
                        onSelectedChange: (val) => setFieldValue(key, val),
                      })}
                      {/* <TextBoxValidator value={values.name} onChange={onChange} {...field} required={fieldObj.required} /> */}
                    </FormField>
                  );
                }}
              </Field>
            );
          })}
          <button type="submit">Create</button>
        </Form>
      )}
    </Formik>
  );
};

export default FunctionForm;
