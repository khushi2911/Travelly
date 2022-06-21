import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import COLORS from '../consts/colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import places from '../consts/places';
import React from 'react';

const DetailsScreen = ({navigation, route}) => {
  const place = route.params;
  const {
    headerStyle,
    imageDetailStyle,
    detailContainerStyle,
    iconContainerStyle,
    footerStyle,
    bookNowBtnStyle,
  } = styles;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 0.7}} source={place.image}>
        <View style={headerStyle}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={imageDetailStyle}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={detailContainerStyle}>
        <View style={iconContainerStyle}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="place" size={28} color={COLORS.primary} />

          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>
            {place.location}
          </Text>
        </View>
        <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
          About the trip
        </Text>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place.details}</Text>
      </View>

      <View style={footerStyle}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
            {' '}
            RS 100
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: COLORS.grey,
              marginLeft: 2,
            }}>
            {' '}
            /PER DAY{' '}
          </Text>
        </View>
        <View style={bookNowBtnStyle}>
          <Text
            style={{color: COLORS.primary, fontSize: 16, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetailStyle: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  detailContainerStyle: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    flex: 0.3,
  },
  iconContainerStyle: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerStyle: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bookNowBtnStyle: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DetailsScreen;
