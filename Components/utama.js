import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View,TextInput } from 'react-native';

import user from '../assets/user.png'
import garis from '../assets/garis.png'
import takeof from '../assets/takeof.png'
import landing from '../assets/landing.png'
import Date from '../assets/Date.png'
import utama from "./penerbangan";

const utama = ({ navigation }) => {
  const [keberangkatan, setKeberangkatan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  

    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <img src={garis} alt="garis" />
              <Text style={styles.header}>Hiling.id</Text>
              <img src={user} alt="user" />
            </View>
            
            <View style={styles.card}>
              <Text style={styles.header2}>Lokasi keberangkatan</Text>
              <View style={styles.maininputan}>
                <img src={takeof} alt="takeof" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Masukkan Lokasi Keberangkatan"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Lokasi Tujuan</Text>
              <View style={styles.maininputan}>
                <img src={landing} alt="landing" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Masukkan Lokasi Tujuan"
                />
              </View>
              <Text style={styles.header2}>Tanggal Keberangkatan</Text>
                <View style={styles.maininputan}>
                  <img src={Date} alt="Date" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Masukkan Tanggal Keberangkatan"
                  />
                </View>
              <Button
                color= '#ED7D31'
                title="cari"
                onPress={() => navigation.navigate('Penerbangan')}
              />
            </View>
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'crimson',
    overflow : "hidden",
  },
  top: {
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:20,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontFamily: "Sans-Serif",
  },
  header2: {
    fontFamily: "Sans-Serif",
  },
  card: {
    backgroundColor: 'white',
    margin: 'auto',
    width: '80%',
    padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
 
});

export default utama;