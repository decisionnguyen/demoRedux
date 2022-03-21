import * as React from 'react';
import {TextInput, TextInputProps} from "react-native";

interface CustomInputProps extends TextInputProps {
    keyName: string,
    onValueChange: (keyName: string, value: string) => void
}

export const CustomInput = React.memo((props: CustomInputProps) => {
    const {keyName, onValueChange, ...remainingProps} = props;

    const onChangeText = (value: string) => {
        onValueChange(keyName, value)
    };


    return (
        <TextInput
            style={{
                width: '100%',
                height: 44,
                backgroundColor: '#eee',
                color:"#111"
            }}
            onChangeText={onChangeText}
            {...remainingProps}
        />
    )
})
