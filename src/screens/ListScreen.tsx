import * as React from 'react';
import styled from "styled-components/native";
import {HeaderClose} from "../component/Header/HeaderClose";
import {Alert, FlatList, TextInput, TouchableOpacity, View} from "react-native";
import {CustomInput} from "../component/CustomInput";
import {useCallback, useEffect, useRef} from "react";
import {RawTodo} from "../types";
import {useNavigation} from '@react-navigation/native';
import {useTodos} from '../store';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ItemContainer = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  border-bottom-width: 1px;
`;
const TodoName = styled.Text`
  color: #111;
  font-size: 16px;
`;

const ItemComponent = ({todo,}: { todo: RawTodo }) => {
    const navigation = useNavigation();

    const onEdit = useCallback(() => {
        navigation.navigate("AddTodoScreen", {todo})
    }, [todo]);

    const onDeleteCB = useCallback(() => {
        Alert.alert("Do you want to delete?", "", [
            {
                text: "Delete",
                style: "cancel",
                onPress: () => {
                }
            },
            {
                text: "Cancel",
                style: "default",
            }
        ])
    }, [todo])

    return (
        <ItemContainer onPress={onEdit} onLongPress={onDeleteCB}>
            <TodoName>
                {todo.name} - {todo.value}
            </TodoName>
        </ItemContainer>
    )
}

const renderItem = ({item, index}: { item: RawTodo, index: number }) => {
    return (
        <ItemComponent todo={item}/>
    )
};


export const ListScreen = React.memo(function ListScreen() {
    const navigation = useNavigation()
    const todoList = useTodos();

    const goToCreate = useCallback(() => {
        navigation.navigate("AddTodoScreen")
    }, []);

    console.log('todoList ', todoList)

    return (
        <Container>
            <HeaderClose title={"List todo"}
                         right={<TouchableOpacity
                             onPress={goToCreate}
                             style={{width: 60}}>
                             <TodoName>
                                 New todo
                             </TodoName>
                         </TouchableOpacity>}/>
            <FlatList
                data={todoList}
                extraData={todoList}
                renderItem={renderItem}/>
        </Container>
    )
})
