import * as yup from 'yup';
import {firstname, 
        lastname,
        username,
        mobilenumber,
        mobilenumber_optional,
        location,
        company_name,
        tagline} from './validations';

// Schema for Create New Foodie Profile
const new_profile = yup.object().shape({username, location, tagline});

// Schema for Company Name Validation
// Added seperately as it is optional
const company_name = yup().object().shape({company_name});

// Use this Schema for Editing Foodie profile
const all = yup.object().shape({firstname, lastname, username, location, mobilenumber_optional, tagline});

export default {new_profile, company_name, all};