import {ReactElement} from "react";
import {StyleSheet, Text, View} from "react-native";
import {MAIN_COLOR} from "../constants/colors";

export default function BuyButton(): ReactElement {
    return (
        <View style={baseStyles.wrapper}>
            <Text style={baseStyles.text}>
                Buy package
            </Text>
        </View>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        padding: 16,
        borderRadius: 20,
        width: "100%",
        backgroundColor: MAIN_COLOR,
        maxWidth: 200,
        alignSelf: "center",
    },
    text: {
        color: "#FFF",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
});
