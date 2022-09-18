import {StyleSheet, TextInput, TextInputProps, View} from "react-native";
import {ReactElement} from "react";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";

export interface TextFieldProps extends TextInputProps {
    buildPrefixIcon?: (props: any) => ReactElement;
}

export default function TextField({children, buildPrefixIcon, style, ...other}: TextFieldProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return (
        <View style={baseStyles.wrapper}>
            {buildPrefixIcon?.({size: 20, color: (styles.input as any).color})}
            <TextInput {...other} style={[baseStyles.input, styles.input, style]}/>
        </View>
    );
}

const baseStyles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 15,
        borderWidth: 1,
        flexGrow: 1,
        marginLeft: 16,
    }
});

const lightStyles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        borderColor: "#888",
        color: "#222",
    },
});

const darkStyles = StyleSheet.create({
    input: {
        backgroundColor: "#3A3A3A",
        borderColor: "#888",
        color: "#FFF",
    }
});
