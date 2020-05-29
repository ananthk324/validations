import * as yup from 'yup';
import {mobilenumber} from './validations';

// Schema to validate mobile number for verification
const schema = yup.object().shape({mobilenumber});

export default schema;