import React, { useState } from 'react';
import { Paper, Typography, TextField, Grid } from '@mui/material';
import AddParticipantForm from './AddParticipantForm';
import SplitIndividuallySummary from './SplitIndividuallySummary';
import { Participant } from '../types';

const SplitIndividuallyForm: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [tip, setTip] = useState('');
  const [delivery, setDelivery] = useState('');

  const handleAdd = (p: Participant) => {
    setParticipants((prev) => [...prev, p]);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">Каждый за себя</Typography>

      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid item xs={6}>
          <TextField fullWidth label="Процент чаевых" type="number" value={tip} onChange={(e) => setTip(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Стоимость доставки" type="number" value={delivery} onChange={(e) => setDelivery(e.target.value)} />
        </Grid>
      </Grid>

      <AddParticipantForm onAdd={handleAdd} />

      <SplitIndividuallySummary
        participants={participants}
        tip={parseFloat(tip || '0')}
        delivery={parseFloat(delivery || '0')}
      />
    </Paper>
  );
};

export default SplitIndividuallyForm;