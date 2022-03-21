import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo} from 'react';
import {ListScreen} from "./screens/ListScreen";
import {AddTodoScreen} from "./screens/AddTodoScreen";


const RootStack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const MainStackComponent = memo(function MainStackComponent() {
    return (
        <MainStack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{
                headerShown: false,
            }}>
            <MainStack.Screen
                name={'ListScreen'}
                component={ListScreen}
            />
            <MainStack.Screen
                name={'AddTodoScreen'}
                component={AddTodoScreen}
            />
        </MainStack.Navigator>
    );
});

export const ModalStackComponent = memo(function ModalStackComponent() {
    return (
        <ModalStack.Navigator
            initialRouteName={'Main'}
            screenOptions={{
                headerShown: false
            }}
        >
            <ModalStack.Screen
                name={'Main'}
                component={MainStackComponent}
                options={{headerShown: false}}
            />
        </ModalStack.Navigator>
    );
});
const Routes = memo(function Routes() {
    return (
        <NavigationContainer

        >
            <RootStack.Navigator initialRouteName={'Modal'}
                                 screenOptions={{
                                     headerShown: false
                                 }}>
                <RootStack.Screen name={'Modal'} component={ModalStackComponent}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
});

export default Routes;
