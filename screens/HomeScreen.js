import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={{width:100, height:100, resizeMode:'contain'}}
                    source={{
                    uri: "https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/123392302_143374684175815_4653051164579611660_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=tIKDImSIh00AX8Ezumg&tn=TMpXjHog_tVhgaf8&_nc_ht=scontent-iad3-2.xx&oh=00_AT8OKQN_X7PkXWP5LSkdP8OB8VqaKZmcmwlq5bJ1YaCvEA&oe=61F278AF"
                }}></Image>
            </View>

            <GooglePlacesAutocomplete
                placeholder='From'
                styles={{container: {
                    flex: 0,
                },
                textInput:{
                    fontSize: 18,
                } }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'vn'
                }}
                onPress={(data, details = null) => {
                    dispatch(
                        setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }
                    ));

                    dispatch(setDestination(null));
                }}
                fetchDetails={true}
                minLength={2}
                enablePoweredByContainer={false}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
            <NavOptions/>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
