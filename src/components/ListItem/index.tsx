import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ILivroProps } from "../../screens/Listar";
import { EvilIcons } from "@expo/vector-icons";

export interface ITextItem {
    textItem: string
}

export function ListItem({ titulo, autor, ano, onPress }: ILivroProps) {
    function handleConfirm(id: number) {
        Alert.alert('Remover', 'Deseja remover o livro selecionado?', [
            {
                text: 'Não'
            },
            {
                text: 'Sim',
                onPress: onPress
            }
        ]) 
    }
    return (
        <View style={styles.listItem}>
            <View>
                <Text style={styles.textItem}>{ titulo }</Text>
                <Text style={styles.textItem}>{ autor }</Text>
                <Text style={styles.textItem}>{ ano }</Text>
            </View>
                <TouchableOpacity style={styles.trash} onPress={()=>handleConfirm}>
                    <EvilIcons name="trash" size={40} color="white" />
                </TouchableOpacity>
            <View>

            </View>
        </View>
    )
}