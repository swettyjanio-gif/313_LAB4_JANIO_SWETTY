import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import StudentCard from './StudentCard';

const students = [
  {
    id: 's1',
    name: 'Ana Cruz',
    course: 'IT313',
    units: 21,
    isFullLoad: true,
  },
  {
    id: 's2',
    name: 'Bea Santos',
    course: 'IT313',
    units: 15,
    isFullLoad: false,
  },
  {
    id: 's3',
    name: 'Cid Ramos',
    course: 'IT313',
    units: 18,
    isFullLoad: true,
  },
  {
    id: 's4',
    name: 'Dex Alonzo',
    course: 'IT313',
    units: 12,
    isFullLoad: false,
  },
];

export default function StudentRoster() {
  const [roster, setRoster] = useState(students);

  function reverseRoster() {
    setRoster([...roster].reverse());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Student Roster
      </Text>

      <Text style={styles.count}>
        {`Total Students: ${roster.length}`}
      </Text>

      {roster.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}

      <Button
        title="Reverse Roster"
        onPress={reverseRoster}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f2f2f2',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  count: {
    fontSize: 18,
    marginBottom: 20,
  },
});