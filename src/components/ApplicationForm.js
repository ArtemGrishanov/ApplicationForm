import React from 'react'
import FormButton from './FormButton'
import FormInput from './FormInput'
import ProgressBar from './ProgressBar'
import SummaryList from './SummaryList'

export default class ApplicationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            maxStepsCount: props.schema.length,
            progress: 0,
            dataOpacity: 1,
            formData: new Map(), // stores inputted user data
            isCurrentStepCompleted: false // indicates, we can move next
        };
        this.onBackClick = this.onBackClick.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
    }

    /**
    * Calls every time when user change value of any field.
    * Sets data to inner component state
    */
    onFormDataChange(fieldId, value) {
        this.state.formData.set(fieldId, value);
        this.setState({
            isCurrentStepCompleted: this.isStepCompleted(this.state.progress)
        });
    }

    /**
    * Checks current step is completed and user can move on
    */
    isStepCompleted(progress) {
        const isSummary = progress >= this.state.maxStepsCount;
        if (isSummary === false) {
            const schemaStep = this.props.schema[progress];
            for (let i = 0; i < schemaStep.data.length; i++) {
                const sdata = schemaStep.data[i];
                const fv = this.state.formData.get(sdata.fieldId);
                if (sdata.validateFunction && sdata.validateFunction(fv) === false) {
                    // can define a specific checking for some fields (ex. email)
                    return false;
                }
                else if (fv === null || fv === undefined || fv === '') {
                    // common field value check
                    return false;
                }
            }
            return true;
        }
        return true;
    }

    /**
    * Goes through the schema and grab info for the summary
    */
    getSummaryData() {
        let result = [];
        for (let i = 0; i < this.props.schema.length; i++) {
            for (let j = 0; j < this.props.schema[i].data.length; j++) {
                const d = this.props.schema[i].data[j];
                result.push({title: d.title, value: this.state.formData.get(d.fieldId)});
            }
        }
        return result;
    }

    onSubmitClick() {
        //TODO submit action
        console.log(this.state.formData);
        alert('Submitted! Data printed to console.');
    }

    onBackClick() {
        const p = this.state.progress-1;
        this.setState({
            dataOpacity: 0,
            progress: p,
            isCurrentStepCompleted: this.isStepCompleted(p)
        });
        setTimeout(() => this.setState({dataOpacity: 1}), 10);
    }

    onNextClick() {
        if (this.state.isCurrentStepCompleted === true) {
            const p = this.state.progress+1;
            this.setState({
                dataOpacity: 0,
                progress: p,
                isCurrentStepCompleted: this.isStepCompleted(p)
            });
            setTimeout(() => this.setState({dataOpacity: 1}), 10);
        }
    }

    render() {
        const isSummary = this.state.progress >= this.state.maxStepsCount;
        const schemaStep = isSummary ? null: this.props.schema[this.state.progress];

        return (
            <div className="frm_wr">
                <div className="frm_cont">
                    <ProgressBar percentage={this.state.progress/this.state.maxStepsCount * 100 + 1}/>
                    {isSummary === false &&
                        <div className={"frm_data mt20 " + (this.state.dataOpacity == 1 ? "__shown": "")}>
                            <p className="frm_ttl">{schemaStep.title}</p>
                            {schemaStep.data.map((item, index) => {
                                const TagName = item.component;
                                return (
                                    <div key={item.title} className="frm_data_i">
                                        <p className="frm_data_ttl">{item.title}</p>
                                        <TagName {...item} value={this.state.formData.get(item.fieldId)} onValueChange={this.onFormDataChange.bind(this, item.fieldId)}>
                                        </TagName>
                                    </div>
                                )
                            })}
                        </div>
                    }
                    {isSummary === true &&
                        <div className={"frm_data mt20 " + (this.state.dataOpacity == 1 ? "__shown": "")}>
                            <p className="frm_ttl">Summary</p>
                            <p className="frm_data_ttl">Please, carefully check your data and submit</p>
                            <SummaryList dataArray={this.getSummaryData()}/>
                        </div>
                    }
                    <div className="frm_btns">
                        {this.state.progress > 0 &&
                            <FormButton text="Back" onClick={this.onBackClick}/>
                        }
                        {isSummary === false &&
                            <FormButton disabled={!this.state.isCurrentStepCompleted} text="Next" onClick={this.onNextClick}/>
                        }
                        {isSummary === true &&
                            <FormButton text="Submit" onClick={this.onSubmitClick}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
