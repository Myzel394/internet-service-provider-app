import {ReactElement} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import Title from "./Title";
import SheetButton from "./SheetButton";
import ModalSheet from "./ModalSheet";
import {MAIN_COLOR} from "../constants/colors";

const SNAP_POINTS = ["45%"];

export default function SettingsSheet(): ReactElement {
    return (
        <ModalSheet snapPoints={SNAP_POINTS}>
            <View style={baseStyles.title}>
                <Title title="Useful"/>
                <Text style={baseStyles.selection}>
                    All
                </Text>
            </View>
            <View style={{height: 16}}/>
            <SheetButton
                buildIcon={props => <MaterialCommunityIcons {...props} name="line-scan"/>}
                title="Payments by QR Code"
                onPress={() => null}
            />
            <SheetButton
                buildIcon={props => <Ionicons {...props} name="document-text-outline"/>}
                title="Invoices to be paid"
                onPress={() => null}
            />
            <SheetButton
                buildIcon={props => <SimpleLineIcons {...props} name="location-pin"/>}
                title="Terminal Map"
                onPress={() => null}
            />
            <SheetButton
                buildIcon={props => <SimpleLineIcons {...props} name="clock"/>}
                title="Autopayments"
                onPress={() => null}
            />
        </ModalSheet>
    )
}

const baseStyles = StyleSheet.create({
    title: {
        marginLeft: 24,
        marginRight: 16,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    selection: {
        fontSize: 14,
        color: MAIN_COLOR,
        fontWeight: "600",
    }
});
