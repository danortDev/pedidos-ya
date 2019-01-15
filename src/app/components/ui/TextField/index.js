import React from 'react';
import UITextField from '@material-ui/core/TextField';

const TextField = ({ input, meta, ...props }) => {
  return (
    <UITextField
      {...props}
      {...input}
      {...meta}
    />
  );
};

export default TextField;
