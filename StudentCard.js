import { View, Text, StyleSheet } from 'react-native';

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text>Course: {course}</Text>

      <Text>Units: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>
          Full Load
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  fullLoad: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});