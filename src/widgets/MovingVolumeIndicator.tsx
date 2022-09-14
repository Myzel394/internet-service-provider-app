import {ReactElement, useState} from "react";
import {Dimensions, StyleSheet} from "react-native";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import {MAIN_COLOR} from "../constants/colors";

enum Direction {
    HORIZONTAL,
    VERTICAL,
}

const MAX_OFFSET = 20;
const LINEAR_OFFSET = 5;
const {width: DISTANCE_WIDTH, height: DISTANCE_HEIGHT} = Dimensions.get("window");

const interpolateValue = (value: number, startPointX: number, startPointY: number, direction: Direction): number => {
    "worklet";

    if (Math.abs(value) <= LINEAR_OFFSET) {
        return value;
    }

    const distance = (() => {
        "worklet";

        switch (direction) {
            case Direction.HORIZONTAL:
                return DISTANCE_WIDTH - startPointX;
            case Direction.VERTICAL:
                return DISTANCE_HEIGHT - startPointY;
        }
    })();

    const multiplier = value < 0 ? -1 : 1;
    const progress = (Math.abs(value) - LINEAR_OFFSET) / distance;

    const offset = Easing.bezierFn(0.075, 0.82, 0.165, 1.0)(progress) * (MAX_OFFSET - LINEAR_OFFSET);

    return (LINEAR_OFFSET + offset) * multiplier;
}

export default function MovingVolumeIndicator(): ReactElement {
    const [startPointX, setStartPointX] = useState<number>(0);
    const [startPointY, setStartPointY] = useState<number>(0);

    const offsetX = useSharedValue<number>(0);
    const offsetY = useSharedValue<number>(0);

    const gesture = Gesture.Pan()
        .onUpdate(event => {
            offsetX.value = interpolateValue(
                event.translationX,
                startPointX,
                startPointY,
                Direction.HORIZONTAL,
            );
            offsetY.value = interpolateValue(
                event.translationY,
                startPointX,
                startPointY,
                Direction.VERTICAL,
            );
        })
        .onEnd(() => {
            offsetX.value = withSpring(0, {});
            offsetY.value = withSpring(0, {});
        });

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: offsetX.value},
                {translateY: offsetY.value},
            ],
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View
                style={[baseStyles.wrapper, animatedStyles]}
                onLayout={event => {
                    const {x, y} = event.nativeEvent.layout;

                    setStartPointX(x);
                    setStartPointY(y);
                }}
            />
        </GestureDetector>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 20,
        backgroundColor: MAIN_COLOR,
    },
});
