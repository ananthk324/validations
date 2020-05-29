import * as yup from 'yup';
import {email} from './validations';

const schema = yup.object().shape({email});

export default schema;