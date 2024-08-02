import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView 
                horizontal={true} 
                contentContainerStyle={styles.contentContainerStyle} // Correctly reference the styles object
                showsHorizontalScrollIndicator={true} // Show horizontal scroll indicator
            >
                <CalendarList
                    horizontal={true}
                    pagingEnabled={true}
                    calendarWidth={320}
                    current={new Date().toISOString().split('T')[0]} // Set the current date
                    pastScrollRange={12} // Number of months allowed to scroll to the past
                    futureScrollRange={12} // Number of months allowed to scroll to the future
                    showScrollIndicator={true} // Show scroll indicator
                    markedDates={{
                        '2024-08-16': { selected: true, marked: true, selectedColor: 'blue' },
                        '2024-08-17': { marked: true },
                        '2024-08-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                        '2024-08-19': { disabled: true, disableTouchEvent: true }
                    }}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        width: 320,
        height: 320,
    }
});