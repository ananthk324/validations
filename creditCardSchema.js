import * as yup from 'yup';
import {name,
        cardnumber,
        cvc,
        expirydate} from './validations';

// Schema for credit card details
const card_details = yup.object().shape({name, cardnumber, cvc, expirydate});

export default card_details;