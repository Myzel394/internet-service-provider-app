import {LinearGradient} from "expo-linear-gradient";
import React, {useContext} from "react";
import AnimateNumber from "react-native-countup";
import GlobalValuesContext from "../context/global-values";
import {StyleSheet, Text, View} from "react-native"

export default function BalanceCard() {
    const globalValues = useContext(GlobalValuesContext);

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
                    <AnimateNumber
                        interval={7}
                        timing="easeOut"
                        value={globalValues.balance}
                        formatter={(value: number) => value.toFixed(1)}
                    />
                </Text>
            </View>
        </View>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: 150,
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
