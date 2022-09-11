import {ReactElement} from "react";
import {StyleSheet, Text} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";

export interface TitleProps {
    title: string;
}

export default function Title({title}: TitleProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return <Text style={[baseStyles.title, styles.title]}>{title}</Text>
}

const baseStyles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "500",
    },
});

const lightStyles = StyleSheet.create({
    title: {
        color: "#222222",
    },
});

const darkStyles = StyleSheet.create({
    title: {
        color: "#FFFFFF",
    },
});
