import {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import IconButton from "./IconButton";
import {AntDesign, FontAwesome5, MaterialIcons} from "@expo/vector-icons";

export default function QuickSelections(): ReactElement {
    return (
        <View style={baseStyles.container}>
            <View style={baseStyles.item}>
                <IconButton
                    buildIcon={props => <MaterialIcons {...props} name="wifi"/>}
                    subTitle="Internet"
                    onPress={() => null}
                    active
                />
            </View>
            <View style={baseStyles.item}>
                <IconButton
                    buildIcon={props => <FontAwesome5 {...props} name="location-arrow"/>}
                    subTitle="Roaming"
                    onPress={() => null}
                />
            </View>
            <View style={baseStyles.item}>
                <IconButton
                    buildIcon={props => <AntDesign {...props} name="play"/>}
                    subTitle="Fun"
                    onPress={() => null}
                />
            </View>
            <View style={baseStyles.item}>
                <IconButton
                    buildIcon={props => <MaterialIcons {...props} name="widgets"/>}
                    subTitle="More"
                    onPress={() => null}
                />
            </View>
        </View>
    );
}

const baseStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    item: {
        flex: 1,
        paddingHorizontal: 16,
    },
});
