import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { Participant } from '../types';

interface SummaryProps {
  participants: Participant[];
  tip: number;
  delivery: number;
}

const SplitIndividuallySummary: React.FC<SummaryProps> = ({ participants, tip, delivery }) => {
  const deliveryShare = participants.length > 0 ? delivery / participants.length : 0;

  const totals = participants.map((p) => {
    const tipAmount = (p.amount * tip) / 100;
    const total = Math.ceil(p.amount + tipAmount + deliveryShare);
    return { ...p, total };
  });

  const finalTotal = totals.reduce((sum, p) => sum + p.total, 0);

  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6">Итог по участникам</Typography>
      <List>
        {totals.map((p) => (
          <ListItem key={p.name}>
            <ListItemText
              primary={`${p.name}: ${p.total} ₽`}
              secondary={`Сумма: ${p.amount} ₽, Чаевые: ${tip}%, Доставка: ${deliveryShare.toFixed(2)} ₽`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1">Итоговая сумма: {finalTotal} ₽</Typography>
    </Paper>
  );
};

export default SplitIndividuallySummary;