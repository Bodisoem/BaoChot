import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id:'123',
        title: 'Báo Chốt',
        image: "https://links.papareact.com/3pn",
        screen:'CopNoti'
    },
    {
        id:'456',
        title: 'Tìm Đường ',
        image: "https://links.papareact.com/28w",
        screen:'MapScreen'
    }
]

const NavOptions = () => {
    const navigation = useNavigation();

    return (
        <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60`}>
                <View>
                    <Image
                        style={{width:120, height:120, resizeMode:"contain"}}
                        source={{uri:item.image}}
                    />
                </View>
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright" color="white" type="antdesign"
                />
            </TouchableOpacity>
        )}
        >

        </FlatList>
    )
}

export default NavOptions

