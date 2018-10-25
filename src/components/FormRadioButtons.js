import React from 'react'

export default class RadioButtons extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onValueChange(e.target.value);
    }

    render() {
        return (
            <form>
                <fieldset>
                    {this.props.options.map((item, index) =>
                        <div key={item.key}>
                            <input type="radio"
                                id={item.key}
                                name={this.props.fieldId}
                                value={item.key}
                                onChange={this.onChange}
                                defaultChecked={this.props.value === item.key}
                                />
                            <label htmlFor={item.key}>{item.text}</label>
                        </div>
                    )}
                </fieldset>
            </form>
        );
    }
}
