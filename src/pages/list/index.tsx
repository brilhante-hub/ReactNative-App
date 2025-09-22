import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/input";
import { MaterialIcons } from '@expo/vector-icons';

type PropCard = {
    item:
    number;
    title: string,
    description: string,
    flag: 'urgente' | 'opcional'
}

const data: Array<PropCard> = [
    {
        item: 0,
        title: 'Realizar lição de casa',
        description: 'página 18 ao 28',
        flag: 'urgente'
    },

    {
        item: 1,
        title: 'Passear com o cachorro',
        description: 'página 18 ao 28',
        flag: 'urgente'
    },

    {
        item: 2,
        title: 'Sair pra tomar um sorvetão',
        description: 'página 18 ao 28',
        flag: 'urgente'
    }
]

export default function List() {

    const _renderCard = (item: PropCard) => {
        return (
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    {/* <Ball> */}
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                    {/* <Flag /> */}
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Seja bem vindo!
                    <Text style={{ fontWeight: 'bold', color: 'black' }}> Vitor Almada Brilhante</Text></Text>
                <View style={style.boxInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={data}
                    style={{ marginTop: 40, paddingHorizontal: 30 }}
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({ item, index }) => { return (_renderCard(item)) }}
                />
            </View>
        </View>
    )
}