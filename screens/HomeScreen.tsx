import { StatusBar } from 'expo-status-bar'
import { Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView className='flex-1 items-center justify-center bg-black '>
            <Text className='text-white'>🚀 Welcome to my React Native APP!</Text>
            <Text className='text-white m-2 text-4xl'>😉</Text>
            <Image
                source={{
                    uri: 'https://i.ebayimg.com/00/s/MTIwMFgxMzQ1/z/wVMAAOSwMGVaZAtC/$_57.JPG?set_id=8800005007',
                }}
                className='w-full h-64'
            />
            <TouchableOpacity>
                <View className='bg mt-5 bg-purple-700 py-3 px-8 rounded-xl font-bold'>
                    <Text className='text-white text-4xl'>Start</Text>
                </View>
            </TouchableOpacity>
            <StatusBar style='auto' />
        </SafeAreaView>
    )
}
export default HomeScreen
