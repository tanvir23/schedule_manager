import React, { Component } from 'react';
import { Text, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='John Doe'
                        value={this.props.name}
                        onChangeText={(text) => this.props.employeeUpdate({
                            prop: 'name',
                            value: text
                        })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        value={this.props.phone}
                        onChangeText={(text) => this.props.employeeUpdate({
                            prop: 'phone',
                            value: text
                        })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Select a shift</Text>
                    <Picker
                        
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({
                            prop: 'shift',
                            value
                        })}
                    >
                        <Picker.Item label='Monday' value='mon' />
                        <Picker.Item label='Tuesday' value='tues' />
                        <Picker.Item label='Wednesday' value='wed' />
                        <Picker.Item label='Thursday' value='thurs' />
                        <Picker.Item label='Friday' value='fri' />
                        <Picker.Item label='Saturday' value='sat' />
                        <Picker.Item label='Sunday' value='sun' />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return {
        name, phone, shift
    };
};
const styles = StyleSheet.create({
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
});


export default connect(
    mapStateToProps,
    {
        employeeUpdate,
        employeeCreate
    }
)(EmployeeCreate);
