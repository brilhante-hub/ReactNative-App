import React, { ForwardedRef, forwardRef, Fragment } from "react";
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { style } from "../../pages/login/styles";
// import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import {FontAwesome, MaterialIcons, Octicons} from '@expo/vector-icons';


type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent, //Icones ativos
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    OnIconLeftPress?: () => void, //Ação do ícone
    OnIconRightPress?: () => void 
}



export const Input = forwardRef<TextInput, Props>((Props, ref: ForwardedRef<TextInput> | null) => {
    const {IconLeft, IconRight, title, OnIconLeftPress, OnIconRightPress,
        ...reset
    } = Props
    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '100%'
        } else if (IconLeft || IconRight) {
            return '100%'
        } else {
            return '100%'
        }
    }
    return (
        <>
        <Text style ={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.boxInput}>
            <TextInput
                style={style.input}
        />
        <MaterialIcons
            name="email"
            size={20}
            color={themas.colors.gray}
        />
        </View>
        </>
    )
})
