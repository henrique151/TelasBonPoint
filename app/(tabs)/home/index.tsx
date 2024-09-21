import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const HomePage = () => {
  const router = useRouter();

  const TelaInicio = () => {
    router.push("../../../pages/TelaInicial");
  };

  return (
    <View style={styles.container}>
      <Link href='/home/settings' style={styles.link}>
        Go to Settings
      </Link>
      
      <Button title="Ir para pagina de Home" onPress={TelaInicio}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 10,
    width: 150,
    alignItems: 'center',
    gap: 10,
    margin: 10
    },
  linkText: {
    color: '#FFFFFF',
  },
});

export default HomePage;
