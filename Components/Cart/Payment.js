import React from 'react'
import {Button, View} from 'react-native'
import {srcSuccess} from '../../Common'

export const Payment = ({ navigation }) => {

    //TODO: Styling here
    return (
        <View>
            <Button
                title='Xác nhận'
                onPress= {() => {
                    //TODO: POST API cart here

                    navigation.navigate(`${srcSuccess}`)
                }}
            />
        </View>
    )
}
