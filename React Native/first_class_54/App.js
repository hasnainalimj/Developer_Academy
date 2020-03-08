import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Image, ScrollView, ImageBackground , ActivityIndicator } from 'react-native';

import { styler } from "./style"

import Secondary from "./Secondary"

export default function App() {
  return (
    <ImageBackground source={require("./assets/1.jpg")} style={styler.bgImage}>
      <Secondary/>
      {/* <View style={[styling.mainWrapper, styling.applyBg]}> */}
      {/* <Text style={[styling.heading, styler.applyBold]}>Open up App.js to start working on your app!</Text>
      <Button
        onPress={() => alert("Hi")}
        title="Say Hi"
        color="red"
        style={styling.applyWidth}
      />
      <TouchableOpacity style={styler.btn} onPress={() => alert("Wao")}>
        <Text>New Button</Text>
      </TouchableOpacity> */}

      {/* <TouchableHighlight style={styler.btn} onPress={() => alert("Wao")}>
        <Text>Work as a Div</Text>
      </TouchableHighlight> */}

      {/* <TouchableOpacity onPress={() => alert("avengers")}>
        <Image
          source={require("./assets/1.jpg")}
          style={styler.img}
        />
      </TouchableOpacity> */}

      {/* <View style={styler.parent}>
        <ScrollView contentContainerStyle={styler.scrl}>
          <TouchableHighlight style={styler.btn} onPress={() => alert("Wao")}>
            <Text>Work as a Div</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styler.btn} onPress={() => alert("Wao")}>
            <Text>Work as a Div</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styler.btn} onPress={() => alert("Wao")}>
            <Text>Work as a Div</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styler.btn} onPress={() => alert("Wao")}>
            <Text>Work as a Div</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styler.btn} onPress={() => alert("Wao")}>
            <Text>Work as a Div</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styler.btn} onPress={() => alert("Wao")}>
            <Text>Work as a Div</Text>
          </TouchableHighlight>
        </ScrollView>
      </View> */}
      {/* //   </View> */}
      {/* <ActivityIndicator color="#fff" size="large" /> */}
    </ImageBackground>
  );
}

const styling = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  applyBg: {
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 20,
    color: "yellow"
  },
  applyWidth: {
    width: 150
  }
})
