import {ReactElement, useContext, useEffect, useRef, useState} from "react";
import ModalSheet from "./ModalSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import GlobalValuesContext from "../context/global-values";
import {View} from "react-native";
import TextField from "./TextField";
import {MaterialIcons} from "@expo/vector-icons";

export interface UpdateGlobalValuesSheetProps {
    onClose: () => void;

    visible?: boolean;
}

const SNAP_POINTS = ["80%"];

export default function UpdateGlobalValues({visible, onClose}: UpdateGlobalValuesSheetProps): ReactElement {
    const globalValues = useContext(GlobalValuesContext);
    const $modal = useRef<BottomSheet>();

    const [name, setName] = useState<string>(globalValues.name);

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
                    value={name}
                    onChangeText={setName}
                />
            </View>
        </ModalSheet>
    )
}
