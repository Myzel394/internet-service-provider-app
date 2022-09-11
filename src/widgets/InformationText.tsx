import {ReactElement} from "react";
import {StyleSheet, Text} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";

export interface InformationTextProps {
    text: string;
}

export default function InformationText({text}: InformationTextProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return <Text style={[baseStyles.text, styles.text]}>{text}</Text>
}

const baseStyles = StyleSheet.create({
    text: {
        fontSize: 12,
        fontWeight: "400",
    },
});

const lightStyles = StyleSheet.create({
    text: {
        color: "#666666",
    },
});

const darkStyles = StyleSheet.create({
    text: {
        color: "#5A5A5A"
    },
});
