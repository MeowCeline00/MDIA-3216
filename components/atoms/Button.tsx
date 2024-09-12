import { Button as NativeButton, View } from "react-native";

export default function MyButton({ buttonTitle }) {
    return (
        <View>
            <NativeButton
                color="salmon"
                title={buttonTitle}
            />
        </View>
    );
}
