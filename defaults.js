import * as yup from 'yup';

export const email = yup
  .string()
  .trim()
  .email('Email must be valid')
  .required()
  .label('Email');

export const password = yup
  .string()
  .min(8)
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])/,
    'Weak password. Add uppercase and lowercase letters.',
  )
  .matches(
    /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
    'Weak password. Add digits and symbols.',
  )
  .required()
  .label('Password');

export const firstname = yup
  .string()
  .trim()
  .matches(/^[a-zA-Z ]*$/, 'Only alphabets allowed in Name')
  .min(1)
  .required()
  .label('First Name');

export const lastname = yup
  .string()
  .trim()
  .matches(/^[a-zA-Z ]*$/, 'Only alphabets allowed in Name')
  .label('Last Name');
