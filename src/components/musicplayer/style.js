import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';

var styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#544459',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    viewcontainer: {
        alignItems: 'center',
    },
    playlist_textcontainer: {
        fontSize: 12,
        color: '#92969c',
    },
    innertexts: {
        color: '#cdd0d1',
    },
    coverContainer: {
        marginTop: 32,
        width: 250, //0.25 * (Dimensions.get('window').width),
        height: 250,// * (Dimensions.get('height').height),
        shadowColor: '#adc3c2',
        // shadowOffset: Platform.OS === 'android' ? 0 : { height: 15 },
        elevation: Platform.OS === 'android' ? 15 : 0,
        shadowRadius: 8,
        shadowOpacity: 0.3,
    },
    cover: {
        width: 250, //(Dimensions.get('window').width),
        height: 250, // (Dimensions.get('height').height),
        borderRadius: 125,
    },
    track: {
        height: 2,
        borderRadius: 1,
        backgroundColor: '#FFF',
    },
    thumb: {
        width: 8,
        height: 8,
        backgroundColor: '#3D425C',
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: '500',
    },
    playButtonContainer: {
        backgroundColor: '#FFF',
        borderColor: 'rgba(93, 63, 106, 0.2)',
        borderWidth: 16,
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 32,
        shadowColor: '#5D3F6A',
        shadowRadius: 30,
        shadowOpacity: 0.5,
    },
});
module.exports = styles;
