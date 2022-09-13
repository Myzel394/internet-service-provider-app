import {ReactElement} from "react";
import {StyleSheet, Text} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";

export interface SecondaryTextProps {
    text: string;
}

export default function SecondaryText({text}: SecondaryTextProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return (
        <Text style={[baseStyles.text, styles.text]}>
            {text}
        </Text>
    )
}

const baseStyles = StyleSheet.create({
    text: {
        fontSize: 16,
    }
});

const lightStyles = StyleSheet.create({
    text: {
        color: "#aaaaaa",
    }
});

const darkStyles = StyleSheet.create({
    text: {
        color: "#666",
        lineHeight: 24,
    }
});
