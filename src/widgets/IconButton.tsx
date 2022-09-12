import {ReactElement} from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";
import {MAIN_COLOR} from "../constants/colors";

export interface IconButtonProps {
    buildIcon: (props: any) => ReactElement;
    onPress: () => void;

    subTitle?: string;
}

export default function IconButton({buildIcon, onPress, subTitle}: IconButtonProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return (
        <View style={baseStyles.wrapper}>
            <TouchableHighlight
                underlayColor={baseStyles.active.backgroundColor}
                onPress={onPress}
                style={[baseStyles.icon, styles.icon]}
            >
                {buildIcon({
                    // @ts-ignore
                    color: styles.icon.color,
                    size: 24,
                })}
            </TouchableHighlight>
            {subTitle && <Text style={[baseStyles.subTitle, styles.subTitle]}>{subTitle}</Text>}
        </View>
    );
}

const baseStyles = StyleSheet.create({
    icon: {
        padding: 16,
        borderRadius: 18,
        aspectRatio: 1,
        alignSelf: "center",
        elevation: 4,
    },
    active: {
        backgroundColor: MAIN_COLOR,
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
        color: "#222222",
        backgroundColor: "#CCCCCC",
    },
    subTitle: {
        color: "#888888",
    },
});

const darkStyles = StyleSheet.create({
    icon: {
        color: "#FFFFFF",
        backgroundColor: "#303030",
    },
    subTitle: {
        color: "#7A7A7A",
    },
});
