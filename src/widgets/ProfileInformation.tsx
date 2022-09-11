import {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import Picture from "./Picture";
import Title from "./Title";
import InformationText from "./InformationText";
import IconButton from "./IconButton";
import {MaterialIcons} from "@expo/vector-icons";

export default function ProfileInformation(): ReactElement {
    return (
        <View style={baseStyles.container}>
            <View style={baseStyles.mainContainer}>
                <View style={baseStyles.image}>
                    <Picture source={{}}/>
                </View>
                <View style={baseStyles.rawInformation}>
                    <View style={baseStyles.title}>
                        <Title title="Hi, Jenny"/>
                    </View>
                    <InformationText text={"+01 804 2309 8672"}/>
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
