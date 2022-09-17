import 'react-native-gesture-handler';
import AppBody from "./src/widgets/AppBody";
import ProfileInformation from "./src/widgets/ProfileInformation";
import {View} from "react-native";
import QuickSelections from "./src/widgets/QuickSelections";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import SettingsSheet from "./src/widgets/SettingsSheet";
import BalanceCard from "./src/widgets/BalanceCard";
import {useState} from 'react';
import FunSectionSheet from "./src/widgets/FunSectionSheet";
import GlobalValuesContext, {GlobalValuesInterface, initialData} from './src/context/global-values';

export default function App() {
    const [globalValues, setGlobalValues] = useState<GlobalValuesInterface>(initialData)
    const [showFunSheet, setShowFunSheet] = useState<boolean>(false);

    return (
        <GlobalValuesContext.Provider value={globalValues}>
            <GestureHandlerRootView>
                <AppBody>
                    <View style={{height: 40}}/>
                    <ProfileInformation/>
                    <View style={{width: "80%", alignSelf: "center", marginVertical: 32}}>
                        <BalanceCard/>
                    </View>
                    <QuickSelections onFunSectionPress={() => setShowFunSheet(true)}/>
                    <SettingsSheet/>
                </AppBody>
                <FunSectionSheet visible={showFunSheet} onClose={() => setShowFunSheet(false)}/>
            </GestureHandlerRootView>
        </GlobalValuesContext.Provider>
    );
}
