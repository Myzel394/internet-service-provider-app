import {ReactElement} from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import useSelectThemeStylesheet from "../hooks/use-select-theme-stylesheet";

export interface SheetButtonProps {
    buildIcon: (props: any) => ReactElement;
    title: string;
    onPress: () => void;
}

export default function SheetButton({buildIcon, title, onPress}: SheetButtonProps): ReactElement {
    const styles = useSelectThemeStylesheet(lightStyles, darkStyles);

    return (
        <TouchableHighlight
            underlayColor={styles.highlight.backgroundColor}
            activeOpacity={1}
            onPress={() => null}
            style={baseStyles.wrapper}
        >
            <View style={baseStyles.container}>
                <View style={baseStyles.information}>
                    {buildIcon({
                        // @ts-ignore
                        color: styles.icon.color,
                        size: 30,
                    })}
                    <Text style={[baseStyles.title, styles.title]}>{title}</Text>
                </View>
                <View style={[baseStyles.actionIcon, styles.actionIcon]}>
                    <Ionicons
                        name="chevron-forward"
                        size={30}
                        // @ts-ignore
                        color={styles.title.color}
                    />
                </View>
            </View>
        </TouchableHighlight>
    );
}

const baseStyles = StyleSheet.create({
    wrapper: {
        borderRadius: 24,
        padding: 16,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginLeft: 16,
    },
    information: {
        flexDirection: "row",
        alignItems: "center",
    },
    actionIcon: {
        borderWidth: 1,
        borderRadius: 22,
        width: 44,
        aspectRatio: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
    }
});

const lightStyles = StyleSheet.create({
    highlight: {
        backgroundColor: "#f0f0f0",
    },
    icon: {
        color: "#555555",
    },
    title: {
        color: "#222222",
    },
    actionIcon: {
        borderColor: "#AAAAAA",
    }
});

const darkStyles = StyleSheet.create({
    highlight: {
        backgroundColor: "#3B3B3B",
    },
    icon: {
        color: "#9E9E9E",
    },
    title: {
        color: "#FFFFFF",
    },
    actionIcon: {
        borderColor: "#555555",
    }
});