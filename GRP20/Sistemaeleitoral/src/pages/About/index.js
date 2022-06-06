import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import React from "react";

const About = () => {
    return (
        
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}> Sistema Eleitoral</Text>
            <Text style={styles.paraStyle}> Desenvolvimento de Dispositivos Móveis  </Text>

            <View>
                <Image
                    style={styles.imgStyle}
                    source={{
                        uri: "https://i.ibb.co/xm3PHbb/desenho.png",
                      }}
                />
            </View>

            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}> Sobre o Dispositivo </Text>
                <Text style={[styles.paraStyle, styles.aboutPara]}>
                    O Aplicativo tem como propósito suprir um sistema eleitoral e contabilizar votos em determinados setores eleitorais.
                </Text>
            </View>

            <Text style={styles.mainHeader}> Grupo </Text>
            
            <Text> Sergio Luiz </Text>
            <Text > Roberto Fernando </Text>
            <Text > João Paulo </Text>
            <View style={styles.menuContainer}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
    },

    imgStyle: {
        width: 295,
        height: 210,
    },
    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 50,
        marginBottom: 10,
        fontFamily: "JosefinSans_700Bold",
    },
    paraStyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 30,
    },
    aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginVertical: 30,
    },
    aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        fontFamily: "JosefinSans_700Bold",
        alignSelf: "center",
    },
    aboutPara: {
        color: "#fff",
    },
    menuContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
});

export default About;