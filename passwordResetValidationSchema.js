import * as yup from 'yup';
import {otp_six, password} from './validations';

const schema = yup.object().shape({otp_six, password});

export default schema;