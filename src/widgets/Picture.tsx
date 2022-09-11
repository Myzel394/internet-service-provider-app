import {Image, ImageSourcePropType, StyleSheet} from "react-native";
import {ReactElement} from "react";

export interface PictureProps {
    source: ImageSourcePropType
}

export default function Picture({source}: PictureProps): ReactElement {
    return <Image
        source={{
            uri: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        }}
        style={baseStyles.image}
    />
}

const baseStyles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 18,
    },
});
