import React from 'react'
import FormButton from './FormButton'
import FormInput from './FormInput'
import ProgressBar from './ProgressBar'

export default class ApplicationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            maxStepsCount: props.schema.length,
            progress: 0,
            formData: new Map(), // stores inputted user data
            isCurrentStepCompleted: false // indicates, we can move next
        };
        this.onBackClick = this.onBackClick.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
    }

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

    onSubmitClick() {
        //TODO submit action
        console.dir(this.state.formData);
        alert('Submitted!');
    }

    onBackClick() {
        const p = this.state.progress-1;
        this.setState({
            progress: p,
            isCurrentStepCompleted: this.isStepCompleted(p)
        });
    }

    onNextClick() {
        if (this.state.isCurrentStepCompleted === true) {
            const p = this.state.progress+1;
            this.setState({
                progress: p,
                isCurrentStepCompleted: this.isStepCompleted(p)
            });
        }
    }

    render() {
        const isSummary = this.state.progress >= this.state.maxStepsCount;
        const schemaStep = isSummary ? null: this.props.schema[this.state.progress];

        return (
            <div>
                <ProgressBar progress={this.state.progress / this.state.maxStepsCount}/>
                {isSummary === false &&
                    <div>
                        <p>{schemaStep.title}</p>
                        <div text={this.state.errorText}></div>
                        {schemaStep.data.map((item, index) => {
                            const TagName = item.component;
                            return (
                                <div key={item.title}>
                                    <p>{item.title}</p>
                                    <TagName {...item} value={this.state.formData.get(item.fieldId)} onValueChange={this.onFormDataChange.bind(this, item.fieldId)}>
                                    </TagName>
                                </div>
                            )
                        })}
                    </div>
                }
                {isSummary === true &&
                    <p>Summary</p>
                }
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
        );
    }
}
