import {ReactElement} from "react";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";
import {MAIN_COLOR} from "../constants/colors";
import Animated, {
    Easing,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from "react-native-reanimated";

export interface IconButtonProps {
    buildIcon: (props: any) => ReactElement;
    onPress: () => void;

    subTitle?: string;
    active?: boolean;
}

export default function IconButton({buildIcon, onPress, subTitle, active = false}: IconButtonProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    const scale = useSharedValue<number>(1);
    const scaleStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: scale.value,
            },
        ],
    }));

    return (
        <View style={baseStyles.wrapper}>
            <TouchableWithoutFeedback
                onPressIn={() => {
                    scale.value = withTiming(.87, {
                        duration: 300,
                        easing: Easing.out(Easing.ease),
                    }, () => runOnJS(onPress)());
                }}
                onPressOut={() => {
                    scale.value = withSpring(1);
                    onPress();
                }}
            >
                <Animated.View
                    style={[baseStyles.icon, styles.icon, active && baseStyles.active, scaleStyle]}
                >
                    {buildIcon({
                        // @ts-ignore
                        color: styles.icon.color,
                        size: 24,
                    })}
                </Animated.View>
            </TouchableWithoutFeedback>
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
