import React, {ReactElement, useContext, useEffect, useRef, useState} from "react";
import ModalSheet from "./ModalSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import GlobalValuesContext from "../context/global-values";
import {StyleSheet, View} from "react-native";
import TextField from "./TextField";
import {MaterialIcons, AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";

export interface UpdateGlobalValuesSheetProps {
    onClose: () => void;

    visible?: boolean;
}

const SNAP_POINTS = ["80%"];

export default function UpdateGlobalValues({visible, onClose}: UpdateGlobalValuesSheetProps): ReactElement {
    const globalValues = useContext(GlobalValuesContext);
    const $modal = useRef<BottomSheet>();

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
            <View style={{width: "90%", alignSelf: "center", marginTop: 20}}>
                <TextField
                    buildPrefixIcon={props => <MaterialIcons {...props} name="person"/>}
                    autoCapitalize="words"
                    autoComplete="name"
                    value={name}
                    returnKeyType="next"
                    onChangeText={setName}
                    clearTextOnFocus
                />
                <View style={baseStyles.input} />
                <TextField
                    buildPrefixIcon={props => <MaterialCommunityIcons {...props} name="phone"/>}
                    autoComplete="tel-device"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    returnKeyType="next"
                    onChangeText={setPhoneNumber}
                    clearTextOnFocus
                />
                <View style={baseStyles.input} />
                <TextField
                    buildPrefixIcon={props => <MaterialCommunityIcons {...props} name="currency-usd"/>}
                    value={balance.toString()}
                    returnKeyType="next"
                    keyboardType="number-pad"
                    onChangeText={text => setBalance(Number(text))}
                    clearTextOnFocus
                />
                <View style={baseStyles.input} />
                <TextField
                    buildPrefixIcon={props => <MaterialIcons {...props} name="wifi"/>}
                    value={dataVolumeUsed.toString()}
                    returnKeyType="next"
                    keyboardType="number-pad"
                    onChangeText={text => setDataVolumeUsed(Number(text))}
                    clearTextOnFocus
                />
                <View style={baseStyles.input} />
                <TextField
                    buildPrefixIcon={props => <MaterialIcons {...props} name="data-usage"/>}
                    value={dataVolumeAvailable.toString()}
                    returnKeyType="next"
                    keyboardType="number-pad"
                    onChangeText={text => setDataVolumeAvailable(Number(text))}
                    clearTextOnFocus
                />
                <View style={baseStyles.input} />
                <TextField
                    buildPrefixIcon={props => <AntDesign {...props} name="tag"/>}
                    value={price.toString()}
                    returnKeyType="next"
                    keyboardType="number-pad"
                    onChangeText={text => setPrice(Number(text))}
                    clearTextOnFocus
                />
            </View>
        </ModalSheet>
    )
}

const baseStyles = StyleSheet.create({
    input: {
        marginTop: 20,
    }
})
