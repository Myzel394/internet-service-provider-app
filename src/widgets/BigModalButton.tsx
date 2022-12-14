import {ReactElement, useEffect} from "react";
import {Dimensions, StyleSheet, Text, TouchableHighlight} from "react-native";
import {MAIN_COLOR} from "../constants/colors";
import Animated, {useAnimatedStyle, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import {
    MODAL_ANIMATION_IN_BEZIER,
    MODAL_ANIMATION_IN_DURATION,
    MODAL_ANIMATION_OUT_BEZIER,
    MODAL_ANIMATION_OUT_DURATION
} from "../constants/values";
import tinycolor from "tinycolor2";

export interface BuyButtonProps {
    title: string;

    onPress?: () => void;
    visible?: boolean;
}

const {height: DIMENSION_HEIGHT} = Dimensions.get("window");

export default function BigModalButton({title, onPress, visible = false}: BuyButtonProps): ReactElement {
    const translationY = useSharedValue<number>(DIMENSION_HEIGHT * .2);
    const moveInStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: translationY.value,
            }
        ]
    }));

    useEffect(() => {
        if (visible) {
            translationY.value = withDelay(
                120,
                withTiming(0, {
                    duration: MODAL_ANIMATION_IN_DURATION,
                    easing: MODAL_ANIMATION_IN_BEZIER,
                }),
            );
        } else {
            translationY.value = withTiming(DIMENSION_HEIGHT * .2, {
                duration: MODAL_ANIMATION_OUT_DURATION,
                easing: MODAL_ANIMATION_OUT_BEZIER,
            });
        }
    })

    return (
        <Animated.View style={moveInStyle}>
            <TouchableHighlight
                onPress={onPress}
                underlayColor={tinycolor(baseStyles.wrapper.backgroundColor).darken(20).toString()}
                style={baseStyles.wrapper}
            >
                <Text style={baseStyles.text}>
                    {title}
                </Text>
            </TouchableHighlight>
        </Animated.View>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        padding: 16,
        borderRadius: 20,
        width: "100%",
        backgroundColor: MAIN_COLOR,
        maxWidth: 200,
        alignSelf: "center",
    },
    text: {
        color: "#FFF",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
});
