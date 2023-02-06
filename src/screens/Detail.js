import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

const Detail = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
        >
          <Feather name='chevron-left' color='#FFF' size={25} />
        </TouchableOpacity>
        <Feather name='shopping-cart' color='#FFF' size={25} />
      </View>
      <Image source={require('../img/2.png')} style={styles.img} />
      <View style={styles.cont3}>
        <Text style={styles.title}>Maxx Scooter</Text>
        <Text style={styles.subtitle}>Model S1</Text>
        <View style={styles.cont2}>
          <Text style={{ ...styles.title, flex: 2, marginTop: 0 }}>
            Colors
          </Text>
          <View style={styles.selected}>
            <View style={styles.c1}></View>
          </View>
          <View style={styles.c2}></View>
          <View style={styles.c3}></View>
        </View>
        <Text
          style={styles.text}
          ellipsizeMode='tail'
          numberOfLines={3}
        >
          In eu laboris velit eiusmod eiusmod aute ut ex adipisicing
          proident. Occaecat sint cillum consectetur commodo. Ut anim
          ea eu dolor nulla pariatur ad. Ea tempor voluptate excepteur
          nostrud in consectetur dolor magna nulla sit ea dolor velit.
          Nisi proident pariatur anim culpa do sunt nisi reprehenderit
          aute dolore magna. Id esse aliquip eu eu qui enim culpa.
          Lorem reprehenderit cupidatat proident cillum aliqua aute
          veniam laboris consequat ullamco. Pariatur veniam et nostrud
          id minim sit qui amet quis reprehenderit enim. Consequat
          sint sunt commodo ex do adipisicing elit nisi mollit quis
          dolor pariatur eu enim. Anim irure deserunt reprehenderit in
          tempor officia eiusmod voluptate ut eu sit aliqua elit ea.
          Dolor proident ea reprehenderit occaecat. Minim laboris
          ipsum eiusmod nisi fugiat pariatur tempor Lorem ex Lorem
          eiusmod excepteur sint. Ad excepteur sunt deserunt mollit
          aute anim anim aute aliquip sit laborum qui quis proident.
          Non ut labore ad duis pariatur aliqua et amet. Sit anim sint
          do eu do irure ex sit sit mollit voluptate fugiat dolore
          sint. Laborum anim sint ullamco officia officia. Cillum
          voluptate do nisi amet tempor sunt amet. Voluptate do et id
          nisi. Esse cillum officia ipsum sit minim quis est ullamco
          exercitation sint. Mollit laborum sunt elit do aliqua in
          amet do. Cupidatat nulla mollit ut nostrud anim sit
          exercitation in minim dolore minim voluptate velit proident.
          Aliqua ut Lorem quis non fugiat quis ut eu laboris ea aute.
          Labore excepteur ipsum laborum irure excepteur cupidatat.
        </Text>
        <View style={styles.cont1}>
          <FontAwesome name='heart-o' color='#000' size={25} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate('Home')}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 15,
    color: '#474747',
    marginTop: 10,
    fontFamily: 'Montserrat_400Regular',
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 18,
    paddingRight: 80,
    lineHeight: 22,
  },
  btn: {
    backgroundColor: '#E2443B',
    paddingHorizontal: 68,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    color: '#FFFF',
  },
  cont1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#529CC0',
    marginLeft: 5,
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#529C47',
    marginLeft: 5,
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#E2443B',
  },
  selected: {
    borderColor: '#E2443B',
    height: 30,
    width: 30,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  img: {
    height: '45%',
    width: '50%',
    marginBottom: 5,
  },
  cont3: {
    flex: 1,
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
