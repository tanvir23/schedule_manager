import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './views/LoginForm';
import EmployeeList from './views/EmployeeList';
import EmployeeCreate from './views/EmployeeCreate';

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
                    onRight={() => Actions.employeeCreate()}
                    renderLeftButton={null}
                />
                <Scene 
                    key='employeeCreate'
                    title='Create Employee' 
                    component={EmployeeCreate}
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
