import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { CompListItem, CompLoading } from "../../components";
import { apiLivro } from "../../services/data";
import { styles } from "./styles";
import { ButtonInterface } from "../../components/ButtonInterface";
import { TabTypes } from "../../navigations/tab.navigation";
import { AxiosError } from "axios";
export interface ILivro {
    id?: number
    titulo?: string
    autor?: string
    ano?: number
}
export interface ILivroProps {
    id?: number
    titulo?: string
    autor?: string
    ano?: number
    onPress?: () => void
}

export function Listar({ navigation }: TabTypes) {
    const [data, setData] = useState<ILivro[]>()
    const [loading, setLoading] = useState(true)
    async function fetchData() {
        const response = await apiLivro.index()
        setData(response.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    async function handleRemove(id: number) {
        try{
            setLoading(true)
            await apiLivro.delete(id)
            Alert.alert("Livro removido!")
            fetchData()
        } catch(error){
            const err = error as AxiosError
            Alert.alert(err.response?.data as string)
        } finally {
            setLoading(false)
        console.log(id)
    }
    return (
        <>
            {
                loading ? (
                    <CompLoading />
                ) : (
                    <View style={styles.container}>
                        <Text style={styles.title}>Livros</Text>
                        <FlatList
                            data={data}
                            renderItem={({ item }) =>
                                <CompListItem key={item.id}
                                    titulo={item.titulo} autor={item.autor} ano={item.ano} onPress={()=> handleRemove(Number(item.id))}
                                />
                            }
                            keyExtractor={(i) => String(i.id)}
                        />
                    </View>
                )
            }
        </>
    )
}
}