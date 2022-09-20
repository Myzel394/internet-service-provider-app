import React, {Dispatch, ReactElement, SetStateAction, useContext, useEffect, useRef, useState} from "react";
import {Text} from "react-native";
import ModalSheet from "./ModalSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import GlobalValuesContext, { GlobalValuesInterface } from "../context/global-values";
import {StyleSheet, View} from "react-native";
import TextField from "./TextField";
import {MaterialIcons, AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import useSelectThemeStyleSheet from "../hooks/use-select-theme-stylesheet";
import BigModalButton from "./BigModalButton";

export interface UpdateGlobalValuesSheetProps {
    onClose: () => void;
    updateGlobalValues: Dispatch<SetStateAction<GlobalValuesInterface>>;

    visible?: boolean;
}

const SNAP_POINTS = ["90%"];

export default function UpdateGlobalValues({visible, updateGlobalValues, onClose}: UpdateGlobalValuesSheetProps): ReactElement {
    const globalValues = useContext(GlobalValuesContext);
    const $modal = useRef<BottomSheet>();

    const styles = useSelectThemeStyleSheet(lightStyles, darkStyles);

    const [name, setName] = useState<string>(globalValues.name);
    const [phoneNumber, setPhoneNumber] = useState<string>(globalValues.phoneNumber);
    const [balance, setBalance] = useState<number>(globalValues.balance);
    const [dataVolumeUsed, setDataVolumeUsed] = useState<number>(globalValues.dataVolumeUsed);
    const [dataVolumeAvailable, setDataVolumeAvailable] = useState<number>(globalValues.dataVolumeAvailable);
    const [price, setPrice] = useState<number>(globalValues.price);

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
            snapPoints={SNAP_POINTS}
            index={visible ? 0 : -1}
            onClose={onClose}
            enablePanDownToClose
        >
            <View style={{width: "90%", alignSelf: "center", marginVertical: 20}}>
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
            </View>
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
        </ModalSheet>
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
});

const lightStyles = StyleSheet.create({
    label: {
        color: "#222",
    },
});

const darkStyles = StyleSheet.create({
    label: {
        color: "#fff",
    },
});

