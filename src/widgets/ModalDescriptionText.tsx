import {ReactElement, useEffect} from "react";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {
    MODAL_ANIMATION_IN_BEZIER,
    MODAL_ANIMATION_IN_DURATION,
    MODAL_ANIMATION_OUT_BEZIER,
    MODAL_ANIMATION_OUT_DURATION
} from "../constants/values";
import SecondaryText from "./SecondaryText";

export interface ModalDescriptionTextProps {
    visible?: boolean;
}

export default function ModalDescriptionText({visible}: ModalDescriptionTextProps): ReactElement {
    const opacity = useSharedValue<number>(0);
    const translationY = useSharedValue<number>(80);
    const fadeInStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [
            {
                translateY: translationY.value,
            },
        ],
    }));

    useEffect(() => {
        if (visible) {
            opacity.value = withTiming(1, {
                duration: MODAL_ANIMATION_IN_DURATION,
                easing: Easing.linear,
            });
            translationY.value = withTiming(0, {
                duration: MODAL_ANIMATION_IN_DURATION,
                easing: MODAL_ANIMATION_IN_BEZIER,
            });
        } else {
            opacity.value = withTiming(0, {
                duration: MODAL_ANIMATION_OUT_DURATION,
                easing: Easing.linear,
            });
            translationY.value = withTiming(80, {
                duration: MODAL_ANIMATION_OUT_DURATION,
                easing: MODAL_ANIMATION_OUT_BEZIER,
            });
        }
    }, [visible]);

    return (
        <Animated.View style={fadeInStyle}>
            <SecondaryText
                text="A package for those of you who like to play social media. It also includes a special gift from us, so what are you wa..."/>
        </Animated.View>
    )
}
