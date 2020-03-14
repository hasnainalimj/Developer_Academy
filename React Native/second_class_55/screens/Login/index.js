import React from "react"

import { TouchableOpacity, Text} from "react-native"

export default function Login(props){
    return (
        <TouchableOpacity 
        onPress={() => props.route('AppStack')}>
            <Text>Login Screen</Text>
        </TouchableOpacity>
    )
}