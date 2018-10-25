import './style/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationForm from './components/ApplicationForm'
import { TENANT_SCHEMA } from './config'

// AllicationForm component knows how to request user data
ReactDOM.render(<ApplicationForm schema={TENANT_SCHEMA} />, document.getElementById('id-root'));

// can build other Forms easely
//ReactDOM.render(<ApplicationForm scheme={LANDLORD_SCHEMA} />, document.getElementById('id-root'));
//ReactDOM.render(<ApplicationForm scheme={TENANT_ONE_STEP_SCHEMA} />, document.getElementById('id-root'));
//...
