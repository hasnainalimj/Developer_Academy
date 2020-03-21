import { StyleSheet , Dimensions , Platform } from "react-native"
const {width , height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container : {
        width,
        height,
        ...Platform.select({
            ios : {
                backgroundColor : "green"
            },
            android: {
                backgroundColor : "red",
            }
        }),
        justifyContent : "center",
        alignItems : "center"
    },
    child: {
        width : width * 0.5,
        height : height * 0.1,
        backgroundColor : "blue"
    },
    txt: {
        color : "yellow",
        fontSize : width * 0.04
    }
})