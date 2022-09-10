import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Header, ItemListFood, ItemValue, Gap} from '../../components';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="Your deserve beter meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type="order-summary"
          name="Soup Bumil"
          price="30.000"
          image={FoodDummy1}
          items={5}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Heatly" value="IDR 19.800.00" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.900.800" valueColor="red" />
        <ItemValue
          label="Total Price"
          value="IDR 24.000.000"
          valueColor="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to :</Text>
        <ItemValue label="Name" value="Maulan" />
        <ItemValue label="Phone" value="0899283819" />
        <ItemValue label="Address" value="Jakarta Raya No 21" />
        <ItemValue label="House No." value="31" />
        <ItemValue label="City" value="Jakarta" />
      </View>
      <View style={styles.button}>
        <Button
          text="Order Now"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
