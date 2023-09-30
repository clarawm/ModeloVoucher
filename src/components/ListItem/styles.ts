import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: colors.primary,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textItem: {
        color: colors.white,
        fontSize: 20
    },
    trash: {
        backgroundColor: colors.black,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    }
})