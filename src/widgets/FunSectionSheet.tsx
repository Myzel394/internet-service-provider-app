import BlurView from "expo-blur/build/BlurView";
import React, {ReactElement} from "react";
import ModalSheet from "./ModalSheet";
import Title from "./Title";
import {Dimensions, StyleSheet, View} from "react-native";
import SecondaryText from "./SecondaryText";
import {LineChart} from "react-native-chart-kit";
import {MAIN_COLOR} from "../constants/colors";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";
import RemainingVolume from "./RemainingVolume";

export interface FunSelectionSheetProps {
    onClose: () => void;

    visible?: boolean;
}

const SNAP_POINTS = ["80%"];

export default function FunSectionSheet({visible, onClose}: FunSelectionSheetProps): ReactElement {
    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    return (
        <ModalSheet
            snapPoints={SNAP_POINTS}
            index={visible ? 0 : -1}
            backdropComponent={() =>
                visible ? <BlurView
                    style={{flex: 1, position: "absolute", width: "100%", height: "100%"}}
                    intensity={20}
                    tint="dark"
                /> : null
            }
            onClose={onClose}
            enablePanDownToClose
        >
            <View style={baseStyles.wrapper}>
                <RemainingVolume/>
                <Title title="Information"/>
                <SecondaryText
                    text="A package for those of you who like to play social media. It also includes a special gift from us, so what are you wa..."/>
            </View>
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
        </ModalSheet>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        padding: 16,
    }
});

const lightStyles = StyleSheet.create({
    chart: {
        backgroundColor: "#fff",
        color: "#888",
    }
});

const darkStyles = StyleSheet.create({
    chart: {
        backgroundColor: "#303030",
        color: "#5A5A5A",
    }
});
