import React, { useState } from 'react';
import { Modal, StyleSheet, View, Button, Text } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { styles } from "./style";

interface CustomCalendarProps {
  visible: boolean;
  onClose: () => void;
  onDateSelect: (date: string) => void;
}


LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: "Hoje"
};

LocaleConfig.defaultLocale = 'br';

export default function Calendario({ visible, onClose, onDateSelect }: CustomCalendarProps) {

  const [selected, setSelected] = useState('');
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day:any) => {
              const data = `${day.day}/${day.month}/${day.year}`
              onDateSelect(data);
              onClose();
            }}
            markedDates={{
              [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'blue'}
            }}
            theme={{
              selectedDayBackgroundColor: 'blue',
              todayTextColor: 'red',
              arrowColor: 'blue',
            }}
          />
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}