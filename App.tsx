import AppBody from "./src/widgets/AppBody";
import ProfileInformation from "./src/widgets/ProfileInformation";
import {View} from "react-native";

export default function App() {
    return (
        <AppBody>
            <View style={{height: 40}}/>
            <ProfileInformation/>
        </AppBody>
    );
}
