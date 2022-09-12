import {ReactElement, useRef} from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import {StyleSheet, View} from "react-native";
import {MaterialCommunityIcons, Ionicons, SimpleLineIcons} from "@expo/vector-icons";
import useSelectThemeStylesheet from "../hooks/use-select-theme-stylesheet";
import Title from "./Title";
import SheetButton from "./SheetButton";

const SNAP_POINTS = ["45%"];

export default function SettingsSheet(): ReactElement {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const styles = useSelectThemeStylesheet(lightStyles, darkStyles);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={SNAP_POINTS}
            index={0}
            handleStyle={[baseStyles.handleWrapper, styles.container]}
            backgroundComponent={null}
            handleIndicatorStyle={[baseStyles.handle, styles.handle]}
        >
            <View style={[baseStyles.container, styles.container]}>
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
            </View>
        </BottomSheet>
    );
}

const baseStyles = StyleSheet.create({
    handleWrapper: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    handle: {
        width: 40,
        height: 8,
        alignSelf: "center",
        borderRadius: 4,
        marginVertical: 12,
    },
});

const lightStyles = StyleSheet.create({
    container: {
        backgroundColor: "#EAEAEA",
    },
    handle: {
        backgroundColor: "#FFFFFF",
    }
});

const darkStyles = StyleSheet.create({
    container: {
        backgroundColor: "#303030",
    },
    handle: {
        backgroundColor: "#585858",
    }
});
