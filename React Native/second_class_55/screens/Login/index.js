import React from "react"
import { TouchableOpacity, Text, Dimensions, View, Platform, Animated } from "react-native"
import { styles } from "./styles"

const { width, height } = Dimensions.get("window")

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fadeAnim: new Animated.Value(0)
        }
    }

    // console.log("width" , width)
    // console.log("height" , height)

    // console.log("Platform" , Platform.OS)

    // console.log("Platform", Platform.Version)

    componentDidMount() {
        const { fadeAnim } = this.state
        Animated.spring(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
    }


    render() {

        return (
            <TouchableOpacity
                accessible={true}
                accessibilityLabel="Tap me!"
                style={styles.container}
            >
                <View style={styles.child}>
                    <Text style={styles.txt}>Hello Janu</Text>
                </View>

                {/* <Animated.View style={[styles.child , {opacity: this.state.fadeAnim}]}>
                    <Text style={styles.txt}>Hello Janu</Text>
                </Animated.View> */}
            </TouchableOpacity>
        )
    }
}