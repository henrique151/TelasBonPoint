import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const ListPage = () => {
  return (
    <View style={styles.container}>
      <Link href="/list/1">New One</Link>
      <Link href="/list/2">New Two</Link>
      <Link href="/list/3">New Three</Link>
    </View>
  );
};

export default ListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  textModelo1: {
    fontSize: 12,
    fontWeight: 700,
  },
});
