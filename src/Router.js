import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './views/LoginForm';
import EmployeeList from './views/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key='root'>
                <Scene 
                    key='login' 
                    component={LoginForm} 
                    title="Authentication"
                    initial
                />
                <Scene 
                    key='employeeList'
                    component={EmployeeList} 
                    title="List of Employees"
                    rightTitle='ADD'
                    onRight={() => console.log('object')}
                    renderLeftButton={null}
                />
            </Stack>
        </Router>
    );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'gray'
//   }
// });

export default RouterComponent;
