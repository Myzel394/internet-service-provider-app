import {ReactElement} from "react";
import {StyleSheet, Text, View} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";

export default function PriceText(): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return (
        <View>
            <Text style={[baseStyles.caption, styles.caption]}>
                Price
            </Text>
            <Text style={[baseStyles.value, styles.value]}>
                $50.99
            </Text>
        </View>
    )
}

const baseStyles = StyleSheet.create({
    caption: {
        fontSize: 14,
    },
    value: {
        fontSize: 28,
    },
});

const lightStyles = StyleSheet.create({
    caption: {
        color: "#555",
    },
    value: {
        color: "#222",
    },
});

const darkStyles = StyleSheet.create({
    caption: {
        color: "#6D6D6D",
    },
    value: {
        color: "#FFF",
    },
});
