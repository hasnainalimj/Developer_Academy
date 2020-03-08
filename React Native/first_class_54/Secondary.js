import React from "react"

import { Text, Button, View, StyleSheet, Modal, Alert } from "react-native"

export default class Secondary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }
    }

    toggleModal = () => {
        let { modal } = this.state
        this.setState({
            modal: !modal
        })
    }

    render() {
        const { modal } = this.state
        return (
            <View style={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: "center" }}>
                <Button
                    title="Toggle Modal"
                    onPress={this.toggleModal}
                />
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={modal}
                    onRequestClose={this.toggleModal}>
                        <Text>This is my modal</Text>
                </Modal>
            </View>
        )
    }
}