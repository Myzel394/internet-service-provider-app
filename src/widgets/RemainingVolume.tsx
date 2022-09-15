import {ReactElement, useEffect} from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";
import {MAIN_COLOR} from "../constants/colors";
import MovingVolumeIndicator from "./MovingVolumeIndicator";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {
    MODAL_ANIMATION_IN_BEZIER,
    MODAL_ANIMATION_IN_DURATION,
    MODAL_ANIMATION_OUT_BEZIER,
    MODAL_ANIMATION_OUT_DURATION
} from "../constants/values";

export interface RemainingVolumeProps {
    visible?: boolean;
}

const {width: DIMENSION_WIDTH} = Dimensions.get("window");

export default function RemainingVolume({visible = false}: RemainingVolumeProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    const translationX = useSharedValue<number>(-DIMENSION_WIDTH);
    const moveInStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translationX.value,
            },
        ],
    }));

    useEffect(() => {
        if (visible) {
            translationX.value = withTiming(0, {
                duration: MODAL_ANIMATION_IN_DURATION,
                easing: MODAL_ANIMATION_IN_BEZIER,
            });
        } else {
            translationX.value = withTiming(-DIMENSION_WIDTH, {
                duration: MODAL_ANIMATION_OUT_DURATION,
                easing: MODAL_ANIMATION_OUT_BEZIER,
            });
        }
    }, [visible]);

    return (
        <Animated.View style={[moveInStyle, baseStyles.wrapper, styles.wrapper]}>
            <View style={baseStyles.movingWrapper}>
                <MovingVolumeIndicator/>
            </View>
            <View style={baseStyles.information}>
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
        </Animated.View>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        padding: 20,
        borderRadius: 32,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "flex-end",
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
        marginLeft: 4,
    },
    subTitle: {
        fontSize: 14,
    },
    movingWrapper: {
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 2,
    },
    movingIndicator: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 12,
        backgroundColor: MAIN_COLOR,
    },
    information: {
        flexGrow: 3,
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
