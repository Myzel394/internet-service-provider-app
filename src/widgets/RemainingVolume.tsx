import {ReactElement} from "react";
import {StyleSheet, Text, View} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";

export default function RemainingVolume(): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return (
        <View style={[baseStyles.wrapper, styles.wrapper]}>
            <View>

            </View>
            <View>
                <Text style={[baseStyles.caption, styles.caption]}>
                    Jun 2022
                </Text>
                <View style={baseStyles.value}>
                    <Text style={[baseStyles.valueText, styles.valueText]}>
                        8GB
                    </Text>
                    <Text style={[baseStyles.valueCaption, styles.valueCaption]}>
                        /30 Days
                    </Text>
                </View>
                <Text style={[baseStyles.subTitle, styles.subTitle]}>
                    $349,55
                </Text>
            </View>
        </View>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        padding: 20,
        borderRadius: 32,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    caption: {
        fontSize: 14,
    },
    value: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
    },
    valueText: {
        fontSize: 32,
    },
    valueCaption: {
        fontSize: 20,
    },
    subTitle: {
        fontSize: 14,
    },
});

const lightStyles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#FFFFFF",
    },
    caption: {
        color: "#555",
    },
    valueText: {
        color: "#222",
    },
    valueCaption: {
        color: "#555",
    },
    subTitle: {
        color: "#555",
    },
});

const darkStyles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#3B3B3B",
    },
    caption: {
        color: "#888",
    },
    valueText: {
        color: "#FFF",
    },
    valueCaption: {
        color: "#888",
    },
    subTitle: {
        color: "#FFF",
    }
});
