import { StyleSheet } from 'react-native';

export const styler = StyleSheet.create({
    applyBold: {
        fontWeight : "bold"
    },
    btn: {
        width : 150,
        height : 50,
        borderRadius : 10,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "green",
        margin : 5
    },
    img: {
        width : 100,
        height : 100
    },
    parent: {
        width : "100%",
        height : 200,
        backgroundColor : "red"
    },
    scrl: {
        paddingBottom : 20,
        alignItems : "center"
    },
    bgImage: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})