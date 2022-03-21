import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import styled from "styled-components/native";
import {HeaderBack} from "../component/Header/HeaderBack";
import {RawTodo} from "../types";
import {CustomInput} from "../component/CustomInput";
import {useNavigation, useRoute} from '@react-navigation/native';
import {updateTodoAction} from "../store";

const Container = styled.View`
  
`;

const ButtonDone = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  background-color: #0077cc;
  align-items: center;
  justify-content: center;
`;

const TextWhite = styled.Text`
  font-size: 15px;
  color: #fff;
`;
export const AddTodoScreen = memo(function AddTodoScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const todo = useMemo(() => {
        return {
            ...(route.params?.todo || {})
        }
    }, [route.params?.todo])


    const [params, setParams] = useState<RawTodo>({
        id: `${new Date().getTime()}`,
        value: '',
        name: ''
    });

    useEffect(() => {
        if (!todo) {
            return
        }
        setParams(prev => ({
            ...prev,
            ...todo
        }))
    }, [todo])

    const onValueChange = useCallback((keyName: string, val: string) => {
        setParams(prevValue => ({
            ...prevValue,
            [keyName]: val
        }))
    }, [])

    const onDone = useCallback(() => {
        updateTodoAction(params)
        navigation.goBack();
    }, [params]);

    return (
        <Container>
            <HeaderBack title={"Add todo screen"}/>
            <CustomInput keyName={'name'} placeholder={"name"} onValueChange={onValueChange} value={params.name}/>
            <CustomInput keyName={'value'} placeholder={"value"} onValueChange={onValueChange} value={params.value}/>

            <ButtonDone onPress={onDone}>
                <TextWhite>
                    Done
                </TextWhite>
            </ButtonDone>
        </Container>
    )
})
