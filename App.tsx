import 'react-native-gesture-handler';
import AppBody from "./src/widgets/AppBody";
import ProfileInformation from "./src/widgets/ProfileInformation";
import {View} from "react-native";
import QuickSelections from "./src/widgets/QuickSelections";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import SettingsSheet from "./src/widgets/SettingsSheet";
import BalanceCard from "./src/widgets/BalanceCard";
import { useState } from 'react';
import FunSectionSheet from "./src/widgets/FunSectionSheet";

export default function App() {
    const [showFunSheet, setShowFunSheet] = useState<boolean>(false);

    return (
        <GestureHandlerRootView>
            <AppBody>
                <View style={{height: 40}}/>
                <View style={{width: "90%", alignSelf: "center"}}>
                    <ProfileInformation/>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 32}}>
                    <BalanceCard/>
                </View>
                <QuickSelections onFunSectionPress={() => setShowFunSheet(true)} />
                <SettingsSheet />
            </AppBody>
            <FunSectionSheet visible={showFunSheet} onClose={() => setShowFunSheet(false)} />
        </GestureHandlerRootView>
    );
}
