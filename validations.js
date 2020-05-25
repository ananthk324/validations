import * as yup from 'yup';

export const email = yup
    .string()
    .trim()
    .max(30)
    .email('Email must be valid.')
    .required()
    .label('Email');

export const password = yup
    .string()
    .trim()
    .min(8, 
      'Should be atleast eight characters long.')
    .max(30)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])$/,
      'Weak password. Add uppercase and lowercase letters.')
    .matches(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/,
      'Weak password. Add digits and symbols.')
    .required()
    .label('Password');

export const firstname = yup
    .string()
    .trim()
    .min(1)
    .max(30)
    .matches(/^[a-zA-Z]*$/, 
      'Only alphabets allowed in Name.')
    .required()
    .label('First Name');

export const lastname = yup
    .string()
    .trim()
    .min(1)
    .max(30)
    .matches(/^[a-zA-Z]*$/, 
      'Only alphabets allowed in Name.')
    .required()
    .label('Last Name');

//
export const lastname_notmandatory = yup
    .string()
    .trim()
    .min(1)
    .max(30)
    .matches(/^[a-zA-Z]*$/, 
      'Only alphabets allowed in Name.')
    .notRequired()
    .label('Last Name');

// Verification OTP - Tests for 4 digits
export const otp = yup
    .string()
    .trim()
    .matches(/^[0-9]{4}$/, 
      'OTP should be four numbers.')
    .required()
    .label('OTP');

// Mobile number - Tests for 8 to 12 digits
export const mobilenumber = yup
    .string()
    .trim()
    .min(8, 
      'Should be atleast eight digits.')
    .max(12, 
      'Can be maximum of twelve digits long.')
    .matches(/^[0-9]{8,12}$/, 
      'Mobile number should be numbers only.')
    .required()
    .label('Mobile Number');

// Mobile number - Tests for 8 to 12 digits
export const mobilenumber_optional = yup
    .string()
    .trim()
    .min(8, 
      'Should be atleast eight digits.')
    .max(12, 
      'Can be maximum of twelve digits long.')
    .matches(/^[0-9]{8,12}$/, 
      'Mobile number should be numbers only.')
    .notRequired()
    .label('Mobile Number Optional');

// Name in card - Allows name with spaces in between
export const name = yup
    .string()
    .trim()
    .min(1)
    .max(30)
    .matches(/^[a-zA-Z][a-zA-Z ]+$/, 
      'Only alphabets allowed in Name.')
    .required()
    .label('Name');

// Card number - Tests for 16 digits
export const cardnumber = yup
    .string()
    .trim()
    .matches(/^[0-9]{16}$/, 
      'Only numbers allowed in Card Number.')
    .required()
    .label('Card Number');

// CVC - Tests for 3 or 4 digits
export const cvc = yup
    .string()
    .trim()
    .matches(/^[0-9]{3,4}$/, 
      'CVC should be three or four digits.')
    .required()
    .label('CVC');

// Can be used for seperate month and date validations
// Card expiry date for month - Tests allows 03 and 10, 11, 12
export const expirydate_month = yup
    .string()
    .trim()
    .matches(/^(0[1-9]|1[0-2])$/, 
      'Invalid month.')
    .required()
    .label('Expiry Date Month');

// Card expiry date for year - Test allows 21, 2021
export const expirydate_year = yup
    .string()
    .trim()
    .matches(/^([0-9]{2})$/, 
      'Invalid year.')
    .required()
    .label('Expiry Date Year');

// Card expiry date - Tests allows 03/21, 03/2021, 11/21 
export const expirydate = yup
    .string()
    .trim()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 
      'Invalid date.')
    .required()
    .label('Expiry Date');

// Location
export const location = yup
    .string()
    .trim()
    .required()
    .label('Location');

// Tag lines
export const tagline = yup
    .string()
    .trim()
    .min(1)
    .required()
    .label('Tag Line');

// Tags - Allows Tags with spaces in between
export const tags = yup
    .string()
    .trim()
    .min(1)
    .max(30)
    .matches(/^[a-zA-Z][a-zA-Z ]+$/, 
      'Only alphabets allowed in Tags.')
    .label('Tags');

// Company Name
export const company_name = yup
    .string()
    .trim()
    .max(30)
    .notRequired()
    .label('Company Name');

// Price
export const price = yup
    .string()
    .trim()
    .matches(/^([1-9]\d*(?:\.\d{0,2}))$/)
    .required()
    .label('Price');

// Recipe Name
export const recipe_name = yup
    .string()
    .trim()
    .matches(/^[ A-Za-z0-9_,./&+-]*$/)
    .required()
    .label('Recipe Name');

// Recipe Description
export const recipe_description = yup
    .string()
    .trim()
    .matches(/^[a-zA-Z][a-zA-Z ]+$/, 
      'Only alphabets allowed in description.')
    .required()
    .label('Recipe Description');

// Picked up Date 
export const picked_up_date = yup
    .required()
    .label('Picked up Date');

// Note for Chef - allows . , and alphanumerics
export const note = yup
    .string()
    .trim()
    .matches(/^[ A-Za-z0-9_,./&+-]*$/)
    .notRequired()
    .label('Note');

// username (eg:-Xyz)
export const username = yup
      .string()
      .trim()
      .matches(/^[A-Za-z0-9]+$/)
      .required()
      .label('Username')
   


