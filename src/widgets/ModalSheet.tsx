import BottomSheet, {BottomSheetProps} from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import React, {ReactElement, ReactNode, Ref} from "react";
import {Platform, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from "react-native";
import useSelectThemeStylesheet from "../hooks/use-select-theme-stylesheet";

export interface ModalSheetProps extends Omit<BottomSheetProps, "handleStyle" | "handleIndicatorStyle" | "children"> {
    children: ReactNode;
    innerRef?: Ref<BottomSheet> | undefined;
}

export default function ModalSheet({
                                       backdropComponent,
                                       children,
                                       backgroundComponent = null,
                                       innerRef,
                                       onClose,
                                       index,
                                       ...props
                                   }: ModalSheetProps): ReactElement {
    const styles = useSelectThemeStylesheet(lightStyles, darkStyles);

    return (
        <BottomSheet
            {...props}
            index={index}
            ref={innerRef}
            onClose={onClose}
            backdropComponent={backdropComponent ?? (() => index === -1 ? null :
                <TouchableWithoutFeedback onPress={onClose}>
                    <BlurView
                        style={{flex: 1, position: "absolute", width: "100%", height: "100%"}}
                        intensity={Platform.OS == "ios" ? 20 : 80}
                        tint="dark"
                    />
                </TouchableWithoutFeedback>
            )}
            handleStyle={[baseStyles.handleWrapper, styles.container]}
            handleIndicatorStyle={[baseStyles.handle, styles.handle]}
        >
            <SafeAreaView style={[baseStyles.container, styles.container]}>
                {children}
            </SafeAreaView>
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
        width: "100%",
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
