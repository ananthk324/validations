import * as yup from 'yup';
import {code} from './validations';

// Use this Schema for 'required' validations of Verification codes
const schema = yup.object().shape({code});

export default schema;