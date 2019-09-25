import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from "react-native";

import Colors from "../../constants/Colors";

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.product}>
            <TouchableCmp onPress={props.onViewDetail} >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.image }} />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>$ {props.price.toFixed(2)}</Text>
                </View>
                <View style={styles.actions}>
                    <Button
                        color={Colors.primaryColor}
                        title="View Details"
                        onPress={props.onViewDetail} />
                    <Button
                        color={Colors.primaryColor}
                        title="To Cart"
                        onPress={props.onAddToCart} />
                </View>
            </TouchableCmp>
        </View >
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        margin: 20,
        height: 300,
        overflow: "hidden"
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%"
    },
    details: {
        alignItems: "center",
        height: "15%",
        padding: 10,
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
    },
    price: {
        fontSize: 14,
        color: "#888"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",//vertical axis, cross axis,
        height: "25%",
        paddingHorizontal: 20,
    },
});
export default ProductItem;