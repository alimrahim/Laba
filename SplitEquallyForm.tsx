import React, { useState } from 'react';
import { Paper, Typography, TextField, Grid } from '@mui/material';

const SplitEquallyForm: React.FC = () => {
  const [people, setPeople] = useState('');
  const [amount, setAmount] = useState('');
  const [tip, setTip] = useState('');
  const [delivery, setDelivery] = useState('');

  const peopleCount = parseInt(people);
  const orderAmount = parseFloat(amount);
  const tipPercent = parseFloat(tip || '0');
  const deliveryCost = parseFloat(delivery || '0');

  const totalWithTip = orderAmount + (orderAmount * tipPercent) / 100;
  const totalWithDelivery = totalWithTip + deliveryCost;
  const perPerson = peopleCount ? Math.ceil(totalWithDelivery / peopleCount) : 0;

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">Поровну</Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={6}>
          <TextField fullWidth label="Кол-во человек" value={people} onChange={(e) => setPeople(e.target.value)} type="number" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Сумма заказа" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Процент чаевых" value={tip} onChange={(e) => setTip(e.target.value)} type="number" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Стоимость доставки" value={delivery} onChange={(e) => setDelivery(e.target.value)} type="number" />
        </Grid>
      </Grid>

      <Typography sx={{ mt: 2 }}>Итог на человека: {perPerson} ₽</Typography>
    </Paper>
  );
};

export default SplitEquallyForm;