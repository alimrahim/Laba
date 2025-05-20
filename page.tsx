'use client';

import React, { useState } from 'react';
import { Container, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SplitEquallyForm from '../components/SplitEquallyForm';
import SplitIndividuallyForm from '../components/SplitIndividuallyForm';

export default function Home() {
  const [mode, setMode] = useState<'equally' | 'individually'>('equally');

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Калькулятор оплаты в кафе
      </Typography>

      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={(e, val) => val && setMode(val)}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="equally">Поровну</ToggleButton>
        <ToggleButton value="individually">Каждый за себя</ToggleButton>
      </ToggleButtonGroup>

      {mode === 'equally' ? <SplitEquallyForm /> : <SplitIndividuallyForm />}
    </Container>
  );
}