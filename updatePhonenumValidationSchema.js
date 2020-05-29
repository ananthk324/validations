import * as yup from 'yup';
import {mobilenumber} from './validations';

const schema = yup.object().shape({mobilenumber});

export default schema;

