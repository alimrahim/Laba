import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import { Participant } from '../types';

interface AddParticipantFormProps {
  onAdd: (participant: Participant) => void;
}

const AddParticipantForm: React.FC<AddParticipantFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    if (!name || !amount || isNaN(+amount)) return;
    onAdd({ name, amount: parseFloat(amount) });
    setName('');
    setAmount('');
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <TextField fullWidth label="Имя" value={name} onChange={(e) => setName(e.target.value)} />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth label="Сумма" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" onClick={handleAdd} fullWidth>
          Добавить
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddParticipantForm;