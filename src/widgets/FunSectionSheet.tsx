import BlurView from "expo-blur/build/BlurView";
import React, {ReactElement} from "react";
import ModalSheet from "./ModalSheet";
import Title from "./Title";
import {StyleSheet, View} from "react-native";
import SecondaryText from "./SecondaryText";

export interface FunSelectionSheetProps {
    onClose: () => void;

    visible?: boolean;
}

const SNAP_POINTS = ["80%"];

export default function FunSectionSheet({visible, onClose}: FunSelectionSheetProps): ReactElement {
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
                <Title title="Information"/>
                <SecondaryText
                    text="A package for those of you who like to play social media. It also includes a special gift from us, so what are you wa..."/>
            </View>
        </ModalSheet>
    )
}

const baseStyles = StyleSheet.create({
    wrapper: {
        padding: 16,
    }
});
