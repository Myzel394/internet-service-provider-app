import {Theme} from "../values/theme";
import {Appearance} from "react-native";
import APPEARANCE_THEME_MAP from "../constants/appearance-theme-map";
import {useEffect, useState} from "react";

export default function useSelectedTheme(): Theme {
    const [theme, setTheme] = useState<Theme>(() => {
        const appearance = Appearance.getColorScheme();

        return APPEARANCE_THEME_MAP[appearance ?? "null"];
    });

    useEffect(() => {
        const listener = Appearance.addChangeListener(({colorScheme}) => {
            setTheme(APPEARANCE_THEME_MAP[colorScheme ?? "null"]);
        });

        return () => {
            listener.remove();
        };
    }, []);

    return theme;
}
