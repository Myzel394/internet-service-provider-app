import {StyleSheet} from "react-native";
import useSelectedTheme from "./use-selected-theme";
import {Theme} from "../values/theme";

export default function useSelectThemeStyleSheet<T = any>(
    lightStyles: StyleSheet.NamedStyles<T>,
    darkStyles: StyleSheet.NamedStyles<T>,
): StyleSheet.NamedStyles<T> {
    const theme = useSelectedTheme();

    return theme === Theme.light ? lightStyles : darkStyles;
}
