import {ReactElement, useRef} from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import {StyleSheet, View} from "react-native";
import {MaterialCommunityIcons, Ionicons, SimpleLineIcons} from "@expo/vector-icons";
import useSelectThemeStylesheet from "../hooks/use-select-theme-stylesheet";
import Title from "./Title";
import SheetButton from "./SheetButton";
import ModalSheet from "./ModalSheet";

const SNAP_POINTS = ["45%"];

export default function SettingsSheet(): ReactElement {
    return (
        <ModalSheet snapPoints={SNAP_POINTS}>
            <Title title="Useful" />
            <View style={{height: 16}} />
            <SheetButton
                buildIcon={props => <MaterialCommunityIcons {...props} name="line-scan" />}
                title="Payments by QR Code"
                onPress={() => null}
            />
            <SheetButton
                buildIcon={props => <Ionicons {...props} name="document-text-outline" />}
                title="Invoices to be paid"
                onPress={() => null}
            />
            <SheetButton
                buildIcon={props => <SimpleLineIcons {...props} name="location-pin" />}
                title="Terminal Map"
                onPress={() => null}
            />
            <SheetButton
                buildIcon={props => <SimpleLineIcons {...props} name="clock" />}
                title="Autopayments"
                onPress={() => null}
            />
        </ModalSheet>
    )
}
