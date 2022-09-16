import React, {ReactElement, useEffect} from "react";
import {LineChart} from "react-native-chart-kit";
import {Dimensions, StyleSheet, View} from "react-native";
import {MAIN_COLOR} from "../constants/colors";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";
import Animated, {Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import {LinearGradient} from "expo-linear-gradient";
import {
    MODAL_ANIMATION_IN_DURATION,
    MODAL_ANIMATION_OUT_BEZIER,
    MODAL_ANIMATION_OUT_DURATION
} from "../constants/values";

export interface DataChartProps {
    visible?: boolean;
}

const {width: DIMENSION_WIDTH} = Dimensions.get("window");

export default function DataChart({visible = false}: DataChartProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    const translationX = useSharedValue<number>(0);
    const moveStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translationX.value,
            },
        ],
    }));

    useEffect(() => {
        if (visible) {
            translationX.value = withDelay(
                50,
                withTiming(DIMENSION_WIDTH * 1.1, {
                    duration: MODAL_ANIMATION_IN_DURATION,
                    easing: Easing.linear,
                }),
            );
        } else {
            translationX.value = withTiming(0, {
                duration: MODAL_ANIMATION_OUT_DURATION,
                easing: MODAL_ANIMATION_OUT_BEZIER,
            });
        }
    }, [visible]);

    return (
        <View style={baseStyles.wrapper}>
            <LineChart
                style={{margin: 0, padding: 0, width: "100%"}}
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width * 1.5}
                height={200}
                chartConfig={{
                    color: (_) => MAIN_COLOR,
                    fillShadowGradientFrom: MAIN_COLOR,
                    fillShadowGradientTo: MAIN_COLOR,
                    fillShadowGradientToOpacity: 0,
                    fillShadowGradientOpacity: .2,
                    labelColor: _ => (styles.chart as any).color as string,
                    strokeWidth: 2,
                }}
                yLabelsOffset={0}
                yAxisLabel=""
                formatYLabel={() => ""}
                withDots={false}
                withHorizontalLabels={false}
                withOuterLines={false}
                withInnerLines={false}
                transparent
                bezier
            />
            <Animated.View style={[moveStyle, baseStyles.overlay]}>
                <LinearGradient
                    style={baseStyles.overlayGradient}
                    colors={[
                        "transparent",
                        ...Array(10).fill(styles.overlay.backgroundColor as string)
                    ]}
                    end={{
                        x: 1,
                        y: .5,
                    }}
                />
            </Animated.View>
        </View>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        width: "100%",
    },
    overlay: {
        width: DIMENSION_WIDTH * 1.1,
        height: "100%",
        position: "absolute",
        left: 62,
        top: 0,
    },
    overlayGradient: {
        width: "100%",
        height: "100%",
    },
});

const lightStyles = StyleSheet.create({
    chart: {
        backgroundColor: "#fff",
        color: "#888",
    },
    overlay: {
        backgroundColor: "#fff",
    },
});

const darkStyles = StyleSheet.create({
    chart: {
        backgroundColor: "#303030",
        color: "#5A5A5A",
    },
    overlay: {
        backgroundColor: "#303030",
    },
});
