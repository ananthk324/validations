import * as yup from 'yup';
import {otp_six} from './validations';

const schema = yup.object().shape({otp_six});

export default schema;
