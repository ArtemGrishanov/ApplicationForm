import React from 'react'
import FormInput from './components/FormInput'
import FormRadioButtons from './components/FormRadioButtons'
import { validateEmail } from './helper'

/**
* Allows to set up a form structure for various cases or test
*/
export const TENANT_SCHEMA = [
    {
        title: 'First step title',
        data: [
            {
                fieldId: 'user_name',
                title: 'User Name',
                component: FormInput,
                placeholder: 'ex. Alex Brown'
            },
            {
                fieldId: 'user_email',
                title: 'User Email',
                component: FormInput,
                placeholder: 'myemail@gmail.com',
                validateFunction: validateEmail
            }
        ]
    },
    {
        title: 'Specify your salary',
        data: [
            {
                fieldId: 'user_salary',
                title: 'Salary',
                component: FormRadioButtons,
                options: [
                    {key: "0_1000", text: "0 - 1.000"},
                    {key: "1000_2000", text: "1.000 - 2.000"},
                    {key: "2000_3000", text: "2.000 - 3.000"},
                    {key: "3000_4000", text: "3.000 - 4.000"},
                    {key: "4000+", text: "Mehr als 4.000"}
                ]
            }
        ]
    }
];
