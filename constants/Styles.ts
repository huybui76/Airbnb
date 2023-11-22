

import Colors from './Colors'

import { View, Text, StyleSheet } from 'react-native'

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inputField: {
        height: 44,
        borderWidth: 1,
        borderColor: '#4d4040',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
    },
    btn: {
        backgroundColor: Colors.primary,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'mon-b'
    },
    btnIcon: {
        position: 'absolute',
        left: 16
    },
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: Colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth

    },
    btnOutline: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.grey,
        flexDirection: 'row'

    },
    btnTextOutline: {
        color: '#3a3939',
        fontSize: 17,
        fontFamily: 'mon-b',
        fontWeight: 'bold'
    },
})