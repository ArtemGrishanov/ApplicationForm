## Annotation
This is a compact ApplicationForm react component can be used to collect different data from users. You can define different data fields and split them into steps. Schema describes data fields. See config.js for example.
Example of component common usage
```
ReactDOM.render(<ApplicationForm schema={TENANT_SCHEMA} onSubmit={(data) => {
    console.log(data);
    alert('Submitted! Data printed to console.');
}}/>, document.getElementById('id-root'));
```
Two types of input are supported:
- FormInput
- FormRadioButtons

## Clone and Install
```
git clone https://github.com/ArtemGrishanov/ApplicationForm
cd ApplicationForm
npm install
```

## Launch
To run project locally please type:
```
npm start
```
For your convenience, you can view deployed project here http://appform.surge.sh (demo).
Use your mobile device to test the component. If you have any bugs or problems, please let me know.

## Test
To run tests
```
npm test
```

### Some notes
Repo: https://github.com/ArtemGrishanov/ApplicationForm
