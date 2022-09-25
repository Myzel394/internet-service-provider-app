import React, {Dispatch, ReactElement, SetStateAction, useContext, useEffect, useRef, useState} from "react";
import {Platform, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {BottomSheetModal, BottomSheetScrollView, useBottomSheetDynamicSnapPoints} from "@gorhom/bottom-sheet";
import GlobalValuesContext, {GlobalValuesInterface} from "../context/global-values";
import TextField from "./TextField";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";
import BigModalButton from "./BigModalButton";
import {BlurView} from "expo-blur";

export interface UpdateGlobalValuesSheetProps {
    onClose: () => void;
    updateGlobalValues: Dispatch<SetStateAction<GlobalValuesInterface>>;

    visible?: boolean;
}

const SNAP_POINTS = ["CONTENT_HEIGHT"];

export default function UpdateGlobalValues({
                                               visible,
                                               updateGlobalValues,
                                               onClose
                                           }: UpdateGlobalValuesSheetProps): ReactElement {
    const globalValues = useContext(GlobalValuesContext);
    const $modal = useRef<BottomSheetModal>();

    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    const {
        animatedHandleHeight,
        animatedSnapPoints,
        handleContentLayout,
        animatedContentHeight
    } = useBottomSheetDynamicSnapPoints(SNAP_POINTS);

    const [name, setName] = useState<string>(globalValues.name);
    const [phoneNumber, setPhoneNumber] = useState<string>(globalValues.phoneNumber);
    const [balance, setBalance] = useState<number>(globalValues.balance);
    const [dataVolumeUsed, setDataVolumeUsed] = useState<number>(globalValues.dataVolumeUsed);
    const [dataVolumeAvailable, setDataVolumeAvailable] = useState<number>(globalValues.dataVolumeAvailable);
    const [price, setPrice] = useState<number>(globalValues.price);

    useEffect(() => {
        if (visible) {
            $modal.current?.present();
        } else {
            $modal.current?.close();
        }
    }, [visible]);

    return (
        <BottomSheetModal
            ref={$modal as any}
            snapPoints={animatedSnapPoints}
            index={visible ? 0 : -1}
            contentHeight={animatedContentHeight}
            handleHeight={animatedHandleHeight}
            backgroundComponent={null}
            backdropComponent={(() => visible ?
                    <TouchableWithoutFeedback onPress={onClose}>
                        <BlurView
                            style={StyleSheet.absoluteFill}
                            intensity={Platform.OS == "ios" ? 20 : 80}
                            tint="dark"
                        />
                    </TouchableWithoutFeedback> : null
            )}
            handleStyle={[baseStyles.handleWrapper, styles.container]}
            handleIndicatorStyle={[baseStyles.handle, styles.handle]}
            style={styles.container}
            enablePanDownToClose
        >
            <BottomSheetScrollView
                onLayout={handleContentLayout}
                contentContainerStyle={[baseStyles.wrapper, styles.container]}
            >
                <Text style={[baseStyles.label, styles.label]}>
                    Name
                </Text>
                <TextField
                    buildPrefixIcon={props => <MaterialIcons {...props} name="person"/>}
                    autoCapitalize="words"
                    autoComplete="name"
                    value={name}
                    returnKeyType="next"
                    onChangeText={setName}
                    clearTextOnFocus
                />
                <View style={baseStyles.input}>
                    <Text style={[baseStyles.label, styles.label]}>
                        Telephone Number
                    </Text>
                    <TextField
                        buildPrefixIcon={props => <MaterialCommunityIcons {...props} name="phone"/>}
                        autoComplete="tel-device"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        returnKeyType="next"
                        onChangeText={setPhoneNumber}
                        clearTextOnFocus
                    />
                </View>
                <View style={baseStyles.input}>
                    <Text style={[baseStyles.label, styles.label]}>
                        Balance
                    </Text>
                    <TextField
                        buildPrefixIcon={props => <MaterialCommunityIcons {...props} name="currency-usd"/>}
                        value={balance.toString()}
                        returnKeyType="next"
                        keyboardType="number-pad"
                        onChangeText={text => setBalance(Number(text))}
                        clearTextOnFocus
                    />
                </View>
                <View style={baseStyles.input}>
                    <Text style={[baseStyles.label, styles.label]}>
                        Data Volume Used
                    </Text>
                    <TextField
                        buildPrefixIcon={props => <MaterialIcons {...props} name="wifi"/>}
                        value={dataVolumeUsed.toString()}
                        returnKeyType="next"
                        keyboardType="number-pad"
                        onChangeText={text => setDataVolumeUsed(Number(text))}
                        clearTextOnFocus
                    />
                </View>
                <View style={baseStyles.input}>
                    <Text style={[baseStyles.label, styles.label]}>
                        Data Volume Available
                    </Text>
                    <TextField
                        buildPrefixIcon={props => <MaterialIcons {...props} name="data-usage"/>}
                        value={dataVolumeAvailable.toString()}
                        returnKeyType="next"
                        keyboardType="number-pad"
                        onChangeText={text => setDataVolumeAvailable(Number(text))}
                        clearTextOnFocus
                    />
                </View>
                <View style={baseStyles.input}>
                    <Text style={[baseStyles.label, styles.label]}>
                        Price
                    </Text>
                    <TextField
                        buildPrefixIcon={props => <AntDesign {...props} name="tag"/>}
                        value={price.toString()}
                        returnKeyType="next"
                        keyboardType="number-pad"
                        onChangeText={text => setPrice(Number(text))}
                        clearTextOnFocus
                    />
                </View>
                <View style={{height: 20}}/>
                <BigModalButton
                    title="Save"
                    onPress={() => {
                        updateGlobalValues(previous => ({
                            ...previous,
                            name,
                            phoneNumber,
                            balance,
                            dataVolumeUsed,
                            dataVolumeAvailable,
                            price,
                        }));
                        onClose();
                    }}
                    visible
                />
            </BottomSheetScrollView>
        </BottomSheetModal>
    )
}

const baseStyles = StyleSheet.create({
    input: {
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 16,
        marginBottom: 12,
    },
    wrapper: {
        width: "100%",
        padding: 20,
        flex: 1,
    },
    handle: {
        width: 40,
        height: 8,
        alignSelf: "center",
        borderRadius: 4,
        marginVertical: 12,
    },
    handleWrapper: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
});

const lightStyles = StyleSheet.create({
    label: {
        color: "#222",
    },
    container: {
        backgroundColor: "#EAEAEA",
    },
    handle: {
        backgroundColor: "#FFFFFF",
    }
});

const darkStyles = StyleSheet.create({
    label: {
        color: "#fff",
    },
    container: {
        backgroundColor: "#303030",
    },
    handle: {
        backgroundColor: "#585858",
    }
});

