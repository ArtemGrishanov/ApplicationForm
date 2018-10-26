import React from 'react';
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import ProgressBar from '../components/ProgressBar'
import SummaryList from '../components/SummaryList'
import FormRadioButtons from '../components/FormRadioButtons'
import ApplicationForm from '../components/ApplicationForm'
import { TENANT_SCHEMA } from '../config'

it('FormInput rendering...', () => {
    const copy = shallow(
        <FormInput disable={false} placeholder="plsh" value = "" onValueChange={() => {}}/>
    );
    expect(copy).toMatchSnapshot();
});

it('FormButton rendering...', () => {
    const copy = shallow(
        <FormButton text="Text" disabled={false} onClick={() => {}}/>
    );
    expect(copy).toMatchSnapshot();
});

it('ProgressBar rendering...', () => {
    const copy = shallow(
        <ProgressBar progress="66"/>
    );
    expect(copy).toMatchSnapshot();
});

it('FormRadioButtons rendering...', () => {
    const options = [
        {key: "k1", text: "v1"},
        {key: "k2", text: "v2"},
        {key: "k3", text: "v3"},
        {key: "k4", text: "v4"},
        {key: "k5", text: "v5"}
    ];
    const copy = shallow(
        <FormRadioButtons onValueChange={() => {}} fieldId="id" value="v1" options={options}/>
    );
    expect(copy).toMatchSnapshot();
});

it('SummaryList rendering...', () => {
    const dataArray = [
        {title: "k1", value: "v1"},
        {title: "k2", value: "v2"}
    ];
    const copy = shallow(
        <SummaryList dataArray={dataArray}/>
    );
    expect(copy).toMatchSnapshot();
});

it('ApplicationForm rendering', ()=> {
    const copy = shallow(
        <ApplicationForm schema={TENANT_SCHEMA} onSubmit={(data) => {
            console.log(data)
        }}/>
    );
    expect(copy).toMatchSnapshot();
});
