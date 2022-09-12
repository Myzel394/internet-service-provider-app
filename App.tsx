import 'react-native-gesture-handler';
import AppBody from "./src/widgets/AppBody";
import ProfileInformation from "./src/widgets/ProfileInformation";
import {View} from "react-native";
import QuickSelections from "./src/widgets/QuickSelections";
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useRef} from "react";
import SettingsSheet from "./src/widgets/SettingsSheet";

export default function App() {
    const bottomSheetRef = useRef<BottomSheet>(null);

    return (
        <GestureHandlerRootView>
            <AppBody>
                <View style={{height: 40}}/>
                <ProfileInformation/>
                <QuickSelections/>
                <SettingsSheet />
            </AppBody>
        </GestureHandlerRootView>
    );
}
