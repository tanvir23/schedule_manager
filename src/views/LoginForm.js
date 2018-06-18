import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import * as actions from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={styles.errorViewStyle}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@domain.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='*********'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

const styles = StyleSheet.create({
    errorViewStyle: {
        backgroundColor: 'white'
    },
    errorTextStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});


export default connect(mapStateToProps, actions)(LoginForm);
