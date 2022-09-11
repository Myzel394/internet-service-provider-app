import 'react-native-gesture-handler';
import AppBody from "./src/widgets/AppBody";
import ProfileInformation from "./src/widgets/ProfileInformation";
import {View} from "react-native";
import QuickSelections from "./src/widgets/QuickSelections";
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useRef} from "react";

export default function App() {
    const bottomSheetRef = useRef<BottomSheet>(null);

    return (
        <GestureHandlerRootView>
            <AppBody>
                <View style={{height: 40}}/>
                <ProfileInformation/>
                <QuickSelections/>
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={["25%"]}
                    index={0}
                >
                    <View style={{backgroundColor: "red", flex: 1}}/>
                </BottomSheet>
            </AppBody>
        </GestureHandlerRootView>
    );
}
