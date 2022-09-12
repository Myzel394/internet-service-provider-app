import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";
import React, {ReactElement, ReactNode} from "react";
import {StyleSheet, View} from "react-native";
import useSelectThemeStylesheet from "../hooks/use-select-theme-stylesheet";

export interface ModalSheetProps extends Omit<BottomSheetProps, "handleStyle" | "handleIndicatorStyle" | "children"> {
    children: ReactNode;
}

export default function ModalSheet({
children,
backgroundComponent = null,
...props
}: ModalSheetProps): ReactElement {
    const styles = useSelectThemeStylesheet(lightStyles, darkStyles);

    return (
        <BottomSheet
            {...props}
            backgroundComponent={backgroundComponent}
            handleStyle={[baseStyles.handleWrapper, styles.container]}
            handleIndicatorStyle={[baseStyles.handle, styles.handle]}
        >
            <View style={[baseStyles.container, styles.container]}>
                {children}
            </View>
        </BottomSheet>
    )
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
