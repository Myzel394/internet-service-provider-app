import Title from "./src/widgets/Title";
import AppBody from "./src/widgets/AppBody";
import InformationText from "./src/widgets/InformationText";

export default function App() {
    return (
        <AppBody>
            <Title title="Hi, Jenny"/>
            <InformationText text={"+01 804 2309 8672"}/>
        </AppBody>
    );
}
