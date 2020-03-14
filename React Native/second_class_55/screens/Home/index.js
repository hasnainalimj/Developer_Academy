import React from "react"

import { TouchableOpacity, Text } from "react-native"

export default function Home(props) {
    // console.log(props)
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('About')}>
            <Text>Home Screen</Text>
        </TouchableOpacity>
    )
}