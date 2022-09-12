import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function BalanceCard() {
    return (
        <View style={baseStyles.wrapper}>
            <LinearGradient
                colors={[
                    "#f8346f",
                    "#f37ab5",
                ]}
                style={baseStyles.background}
            />
            <LinearGradient
                colors={[
                    "transparent",
                    "#cc66fa",
                ]}
                end={{
                    x: .6,
                    y: 1,
                }}
                style={[baseStyles.background, baseStyles.overlayBackground]}
            />
            <LinearGradient
                colors={[
                    "#5B2F3C",
                    "transparent",
                    "transparent",
                    "transparent",
                ]}
                style={[baseStyles.background, baseStyles.overlayBackground]}
            />
            <View style={baseStyles.content}>
                <Text style={baseStyles.caption}>
                    Balance
                </Text>
                <Text style={baseStyles.title}>
                    $1.924,3
                </Text>
            </View>
        </View>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: 200,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        width: "100%",
        height: "100%",
        borderRadius: 32,
        position: "absolute",
    },
    overlayBackground: {
        opacity: .6,
    },
    content: {
        justifyContent: "center",
        alignSelf: "center",
    },
    caption: {
        fontSize: 16,
        color: "#FFF",
        opacity: .6,
        textAlign: "center",
        marginBottom: 4,
    },
    title: {
        fontSize: 32,
        color: "#FFF",
        textAlign: "center",
    }
})
