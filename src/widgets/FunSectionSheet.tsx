import BottomSheet from "@gorhom/bottom-sheet";
import BlurView from "expo-blur/build/BlurView";
import React, {ReactElement} from "react";
import {StyleSheet, Text} from "react-native";
import ModalSheet from "./ModalSheet";

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
                <BlurView style={{flex: 1, position: "absolute", width: "100%", height: "100%"}} intensity={20}>
                </BlurView>
            }
            onClose={onClose}
            enablePanDownToClose
        >
            <Text>Test</Text>
        </ModalSheet>
    )
}
