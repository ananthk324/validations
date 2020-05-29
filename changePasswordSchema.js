import * as yup from 'yup';
import {password} from './validations';

// Password validation schema
const schema = yup.object().shape({password});

export default schema;