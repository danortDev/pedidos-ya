import React from 'react';
import UITextField from '@material-ui/core/TextField';
import { FieldWrapper, Error } from './elements';

const TextField = ({ input, meta, ...props }) => {
  const error = meta && meta.touched && meta.error;
  return (
    <FieldWrapper>
      <UITextField
        {...props}
        {...input}
        error={!!error}
      />
      {error && (
        <Error>
          {error}
        </Error>
      )}
    </FieldWrapper>
  );
};

export default TextField;
