import React from 'react'
import FormInput from './components/FormInput'
import FormRadioButtons from './components/FormRadioButtons'
import { validateEmail, validatePhoneNumber } from './helper'

/**
* Allows to set up a form structure for various cases or test
*/
export const TENANT_SCHEMA = [
    {
        title: 'First step title',
        data: [
            {
                fieldId: 'user_name',
                title: 'Full Name',
                component: FormInput,
                placeholder: 'Hans Müller'
            },
            {
                fieldId: 'user_email',
                title: 'Email',
                component: FormInput,
                placeholder: 'me@example.com',
                validateFunction: validateEmail
            },
            {
                fieldId: 'user_phone',
                title: 'Phone Number',
                component: FormInput,
                placeholder: '(+49 30) 12 34 56 78',
                validateFunction: validatePhoneNumber
            }
        ]
    },
    {
        title: 'Specify your salary',
        data: [
            {
                fieldId: 'user_salary',
                title: 'Salary options',
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
