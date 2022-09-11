import {ReactElement} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";

export interface IconButtonProps {
    icon: ReactElement;
    onPress: () => void;

    subTitle?: string;
}

export default function IconButton({icon, onPress, subTitle}: IconButtonProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return (
        <View style={baseStyles.wrapper}>
            <TouchableOpacity onPress={onPress} style={[baseStyles.icon, styles.icon]}>
                {icon}
            </TouchableOpacity>
            {subTitle && <Text style={[baseStyles.subTitle, styles.subTitle]}>{subTitle}</Text>}
        </View>
    );
}

const baseStyles = StyleSheet.create({
    icon: {
        padding: 12,
        borderRadius: 18,
        aspectRatio: 1,
        alignSelf: "center",
        elevation: 4,
    },
    wrapper: {
        flexDirection: "column",
    },
    subTitle: {
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center",
        marginTop: 8,
    }
});

const lightStyles = StyleSheet.create({
    icon: {
        backgroundColor: "#CCCCCC",
    },
    subTitle: {
        color: "#888888",
    },
});

const darkStyles = StyleSheet.create({
    icon: {
        backgroundColor: "#303030",
        color: "white"
    },
    subTitle: {
        color: "#5A5A5A",
    },
});
