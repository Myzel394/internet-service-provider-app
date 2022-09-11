import {ReactElement, ReactNode} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";
import {StatusBar} from "expo-status-bar";
import useSelectedTheme from "../hooks/use-selected-theme";
import {Theme} from "../values/theme";

export interface AppBodyProps {
    children: ReactNode;
}

export default function AppBody({children}: AppBodyProps): ReactElement {
    const theme = useSelectedTheme();
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return (
        <SafeAreaView
            style={[baseStyles.body, styles.body]}
        >
            <StatusBar style={theme == Theme.light ? "dark" : "light"}/>
            {children}
        </SafeAreaView>
    );
}

const baseStyles = StyleSheet.create({
    body: {
        padding: 20,
        height: "100%",
    },
});

const lightStyles = StyleSheet.create({
    body: {
        backgroundColor: "#e0eff0",
    }
});

const darkStyles = StyleSheet.create({
    body: {
        backgroundColor: "#1D1D1D",
    }
});
