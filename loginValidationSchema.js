import * as yup from 'yup';
import {email, password} from './validations';

const schema = yup.object().shape({email, password});

export default schema;