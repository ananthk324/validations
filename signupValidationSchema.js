import * as yup from 'yup';
import {firstname, lastname, email, password, mobilenumber_optional} from './defaults';

const schema = yup.object().shape({firstname, lastname, email, password, mobilenumber_optional});

export default schema;