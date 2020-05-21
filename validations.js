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

// Card expiry date - Tests allows 03/21, 03/2021, 11/21 
export const expiryDate = yup
    .string()
    .trim()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 
      'Invalid date.')
    .required()
    .label('Expiry Date');

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

// Company name
export const companyname = yup
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
    .label('Price')

// recipe name
export const recipename = yup
    .string()
    .trim()
    .required()

// recipe description
export const recipedescription = yup
      .string()
      .trim()
      .matches(/^[a-zA-Z][a-zA-Z ]+$/, 
        'Only alphabets allowed in Description.')
      .required()

//pickedup date 
export const pickedupdate = yup
        .string()
        .required()

//note for chef
export const note = yup
        .string()
        .trim()
        .max(30)
        .matches(/^[a-zA-Z0-9 ]+$/)
        .notRequired()

//rating        
export const rating = yup
        .string()
        .trim()
        .max(30)
        .matches(/^[a-zA-Z0-9 ]+$/)
        .notRequired()

//having trouble with order
export const troublewithorder = yup
        .string()
        .trim()
        .max(30)
        .matches(/^[a-zA-Z0-9 ]+$/)