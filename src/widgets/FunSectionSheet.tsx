import React, {ReactElement, useEffect, useRef, useState} from "react";
import ModalSheet from "./ModalSheet";
import Title from "./Title";
import {Platform, StyleSheet, View} from "react-native";
import RemainingVolume from "./RemainingVolume";
import PriceText from "./PriceText";
import BigModalButton from "./BigModalButton";
import {Easing} from "react-native-reanimated";
import BottomSheet, {useBottomSheetTimingConfigs} from "@gorhom/bottom-sheet";
import ModalDescriptionText from "./ModalDescriptionText";
import DataChart from "./DataChart";

export interface FunSelectionSheetProps {
    onClose: () => void;

    visible?: boolean;
}

const SNAP_POINTS = ["80%"];

export default function FunSectionSheet({visible, onClose}: FunSelectionSheetProps): ReactElement {
    const $modal = useRef<BottomSheet>();
    const [isOpening, setIsOpening] = useState<boolean>(false);

    const animationConfigs = useBottomSheetTimingConfigs(isOpening ? {
        duration: 300,
    } : {
        duration: 800,
        easing: Easing.bezierFn(.19, .77, .13, .95),
    });

    useEffect(() => {
        if (visible) {
            $modal.current?.expand();
        } else {
            $modal.current?.close();
        }
    }, [visible]);

    return (
        <ModalSheet
            innerRef={$modal as any}
            animationConfigs={animationConfigs}
            onAnimate={(_, toIndex) => {
                if (toIndex == 0) {
                    setIsOpening(true);
                } else {
                    setIsOpening(false);
                }
            }}
            snapPoints={SNAP_POINTS}
            index={visible ? 0 : -1}
            onClose={onClose}
            enablePanDownToClose
        >
            <View style={baseStyles.wrapper}>
                <View style={baseStyles.content}>
                    <RemainingVolume visible={isOpening}/>
                    <View style={baseStyles.information}>
                        <Title title="Information"/>
                        <ModalDescriptionText visible={visible}/>
                    </View>
                </View>
                <View style={{
                    marginLeft: -62
                }}>
                    <DataChart visible={visible}/>
                </View>
                <View style={[baseStyles.content, baseStyles.actions]}>
                    <PriceText/>
                    <View style={baseStyles.buyButton}>
                        <BigModalButton title="Buy" visible={isOpening}/>
                    </View>
                </View>
            </View>
        </ModalSheet>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: Platform.OS == "ios" ? 20 : 10,
    },
    content: {
        paddingHorizontal: Platform.OS == "ios" ? 24 : 16,
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    buyButton: {
        flex: 1,
        marginLeft: 20,
        justifyContent: "center",
    },
    information: {
        marginTop: 16,
    }
});

