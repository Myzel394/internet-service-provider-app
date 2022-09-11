import {ReactElement} from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";

export interface IconButtonProps {
    icon: ReactElement;
    onPress: () => void;
}

export default function IconButton({icon, onPress}: IconButtonProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return (
        <TouchableOpacity onPress={onPress} style={[baseStyles.icon, styles.icon]}>
            {icon}
        </TouchableOpacity>
    );
}

const baseStyles = StyleSheet.create({
    icon: {
        padding: 12,
        borderRadius: 18,
        aspectRatio: 1,
        alignSelf: "center",
        elevation: 2,
    },
});

const lightStyles = StyleSheet.create({
    icon: {
        backgroundColor: "#CCCCCC",
    }
});

const darkStyles = StyleSheet.create({
    icon: {
        backgroundColor: "#303030",
        color: "white"
    }
});
