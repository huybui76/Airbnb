import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '../hooks/warmUpBrower'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons'

const Page = () => {
    useWarmUpBrowser()
    return (
        <View style={style.container}>
            <TextInput autoCapitalize='none' placeholder='Email'
                style={[defaultStyles.inputField, { marginBottom: 30 }]}
            />
            <TouchableOpacity style={defaultStyles.btn}>
                <Text style={defaultStyles.btnText}>
                    Continue
                </Text>
            </TouchableOpacity>
            <View style={style.separatorView}>
                <View style={{
                    borderBottomColor: '#060606',
                    borderBottomWidth: StyleSheet.hairlineWidth, flex: 1
                }} >
                </View>
                <Text style={style.separator}>
                    or
                </Text>
                <View style={{
                    borderBottomColor: '#060606',
                    borderBottomWidth: StyleSheet.hairlineWidth, flex: 1
                }} >
                </View>

            </View>
            <View style={{ gap: 20 }}>
                <TouchableOpacity style={defaultStyles.btnOutline}>
                    <AntDesign name="phone" size={24} color="black" style={defaultStyles.btnIcon} />
                    <Text style={defaultStyles.btnTextOutline}>
                        Continue with Phone
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={defaultStyles.btnOutline}>
                    <AntDesign name="google" size={24} color="red" style={defaultStyles.btnIcon} />
                    <Text style={defaultStyles.btnTextOutline}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={defaultStyles.btnOutline}>
                    <AntDesign name="apple1" size={24} color="black" style={defaultStyles.btnIcon} />
                    <Text style={defaultStyles.btnTextOutline}>
                        Continue with Apple
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={defaultStyles.btnOutline}>
                    <AntDesign name="facebook-square" size={24} color="blue" style={defaultStyles.btnIcon} />
                    <Text style={defaultStyles.btnTextOutline}>
                        Continue with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 26
    },
    separatorView: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginVertical: 30

    },
    separator: {
        fontFamily: 'mon-sb',
        color: Colors.grey,

    }
})
export default Page