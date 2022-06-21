/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text ,SafeAreaView,StyleSheet,StatusBar,ScrollView,TextInput,ImageBackground ,Dimensions,
  TouchableOpacity,FlatList} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import places from '../consts/places';
import React from 'react'

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) =>
{
  const categoryIcons = [
    <Icon name="flight" size={25} color={COLORS.primary} />,
    <Icon name="beach-access" size={25} color={COLORS.primary} />,
    <Icon name="near-me" size={25} color={COLORS.primary} />,
    <Icon name="place" size={25} color={COLORS.primary} />,
  ];
  const ListCategories = () =>{
    return(
    <View style={styles.categoryContainerStyle}>
      {categoryIcons.map((icon,index)=>
      (
        <View key={index} style={styles.iconContainerStyle}>{icon}
        </View>
        ))
      }
      </View> 
    );
};
  const Card = ({place}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={()=>{
        navigation.navigate("DetailsScreen",place)
      }}>
<ImageBackground style={styles.cardImageStyle}
      source={place.image} > 
<Text style={{color:COLORS.white,fontSize:20,
fontWeight:'bold',marginTop:10}}>{place.name}</Text>
<View style={{flex:1,
justifyContent:'space-between',flexDirection:'row',
alignItems:'flex-end'}}>
  <View style={{flexDirection:'row'}}>
    <Icon name="place" size={20} color={COLORS.white} />
    <Text style={{marginLeft:5, color:COLORS.white}}> {place.location}
</Text>
  </View>
  <View style={{flexDirection:'row'}}>
    <Icon name="star" size={20} color={COLORS.white} />
    <Text style={{marginLeft:5, color:COLORS.white}}> 5.0
</Text>
  </View>

</View>
    </ImageBackground>

      </TouchableOpacity>
    ) 
  };
  const RecommendedCard = ({place}) =>
  {
    return <ImageBackground style={styles.recommendedCardStyle}
    source={place.image} >
      <Text style={{color:COLORS.white,fontSize:25,
      fontWeight:'bold',marginTop:10,
      }}>
        {place.name}</Text>
      <View style={{flex:1,justifyContent:'space-between',alignItems:'flex-end'}}>
 <View style={{width:'100%',flexDirection:'row',marginTop:10}}>

 <View style={{flexDirection:'row'}}>
 <Icon name ="place" size={22} color={COLORS.white} />
  <Text style={{flexDirection:'row', color:COLORS.white,marginLeft:5}}>  {place.location} </Text>
  </View>
  <View style={{flexDirection:'row'}}>
 <Icon name ="star" size={22} color={COLORS.white} />
  <Text style={{flexDirection:'row', color:COLORS.white,marginLeft:5}}>  5.0 </Text>
  </View>
 </View>

 </View>
 </ImageBackground>
  }
  const {headerStyle,inputContainerStyle,sectionTitleStyle,headerTitleStyle} = styles;
  return (
  <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}} >
    <StatusBar translucent={false} backgroundColor={COLORS.primary} /> 
    <View style ={headerStyle}>
      <Icon name = "sort" size={28} color={COLORS.white} /> 
      <Icon name = "notifications-none" size={28} color={COLORS.white} /> 
  </View>
    <ScrollView showsVerticalScrollIndicator={false}> 

 <View style={{backgroundColor:COLORS.primary,height:120,paddingHorizontal:20}}> 
 <View>
 <Text style={headerTitleStyle}>Explore the</Text>
 <Text style={headerTitleStyle}>Beautiful places</Text>
 <View style={inputContainerStyle}>
   <Icon name = "search" size ={28} />
  <TextInput placeholder="Search Places" style={{color:COLORS.grey}} />
 </View>
 </View>

 </View>
 <ListCategories/>
 <Text style={styles.sectionTitleStyle}>Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          />
          <Text style={sectionTitleStyle}>
  Recommended
</Text>

<FlatList
snapToInterval={width - 20}
 contentContainerStyle={{paddingLeft: 20, paddingBottom:20}}
 horizontal
 showsHorizontalScrollIndicator={false}
  data={places}
renderItem= {({item}) => <RecommendedCard place={item}
/>}
/>
</View>
    </ScrollView>
    </SafeAreaView>
    );
   
};

const styles = StyleSheet.create({
headerStyle:{
paddingVertical:20,
flexDirection: 'row',
justifyContent:'space-between',
backgroundColor:COLORS.primary,
paddingHorizontal:20,
},
headerTitleStyle:{
color:COLORS.white,
fontWeight:'bold',
fontSize:23,
},
inputContainerStyle:{
  height:60,
  width:'100%',
  backgroundColor:COLORS.white,
  borderRadius:10,
  position:'absolute',
  top:90,
  flexDirection:'row',
  paddingHorizontal:20,
  alignItems:'center',
  elevation:12,
},
categoryContainerStyle:{
marginTop:60,
marginHorizontal:20,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',

},
iconContainerStyle:{
height:60,
width:60,
backgroundColor:COLORS.secondary,
justifyContent:'center',
alignItems:'center',
borderRadius:10,
},
sectionTitleStyle:{
  marginHorizontal:20,
  marginVertical:20,
  fontWeight:'bold',
  fontSize:20,
},
cardImageStyle:{height:220,
width:width / 2,
marginRight:20,
padding:10,
borderRadius:10,
overflow:'hidden',
},
recommendedCardStyle:{
  width:width - 4,
  height:200,
  marginLeft:20,
  borderRadius:10,
  overflow:'hidden',
  padding:10,
  
},
});
export default HomeScreen;