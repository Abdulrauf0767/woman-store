import * as yup from 'yup';

export const validation = yup.object({
  f_name: yup.string()
    .min(4, 'First name must be at least 4 characters')
    .max(10, 'First name must be under 10 characters')
    .required('Please enter your first name'),
    
  l_name: yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(5, 'Last name must be under 5 characters')
    .required('Please enter your last name'),

  email: yup.string()
    .email('Enter a valid email')
    .required('Please enter your email'),

  password: yup.string()
    .min(8, 'Password must be 8-15 characters')
    .max(15, 'Password must be 8-15 characters')
    .matches(/[a-z]/, 'Include at least one lowercase letter')
    .matches(/[A-Z]/, 'Include at least one uppercase letter')
    .matches(/\d/, 'Include at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Include at least one special character')
    .required('Please enter your password'),

  c_password: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password')
});
