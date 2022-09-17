import {ReactElement, useContext} from "react";
import {StyleSheet, View} from "react-native";
import Picture from "./Picture";
import Title from "./Title";
import InformationText from "./InformationText";
import IconButton from "./IconButton";
import {MaterialIcons} from "@expo/vector-icons";
import GlobalValuesContext from "../context/global-values";

export default function ProfileInformation(): ReactElement {
    const globalValues = useContext(GlobalValuesContext);

    return (
        <View style={baseStyles.container}>
            <View style={baseStyles.mainContainer}>
                <View style={baseStyles.image}>
                    <Picture source={{}}/>
                </View>
                <View style={baseStyles.rawInformation}>
                    <View style={baseStyles.title}>
                        <Title title={`Hi, ${globalValues.name}`}/>
                    </View>
                    <InformationText text={globalValues.phoneNumber}/>
                </View>
            </View>
            <IconButton
                buildIcon={props => <MaterialIcons {...props} name="settings"/>}
                onPress={() => null}
            />
        </View>
    );
}

const baseStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    mainContainer: {
        flexDirection: "row",
    },
    image: {
        width: 50,
        aspectRatio: 1,
        marginRight: 16,
    },
    title: {
        marginBottom: 4,
    },
    rawInformation: {
        flexDirection: "column",
    }
});
