import React, { useState } from "react";
import { Box, Container, Typography, TextField, Grid, Card, CardContent } from "@mui/material";

type DivisionField = "intermediate" | "advanced" | "open" | "womensAmateur" | "womensOpen";

const PayoutCalculation = () => {
  const [divisions, setDivisions] = useState({
    intermediate: 0,
    advanced: 0,
    open: 0,
    womensAmateur: 0,
    womensOpen: 0,
  });

  const handleChange = (field: DivisionField, value: string) => {
    setDivisions({
      ...divisions,
      [field]: Number(value),
    });
  };

  const mixedDivisionTotal = (divisions.intermediate + divisions.advanced + divisions.open) * 5;
  const womensDivisionTotal = (divisions.intermediate + divisions.advanced + divisions.open);

  return (
    <Box sx={{ mt: "64px", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 4 }}>
          Payout Calculation
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{xs: 12, sm:6}}>
            <TextField
              fullWidth
              label="Number of Intermediate Players"
              type="text"
              inputMode="numeric"
              value={String(divisions.intermediate)}
              onChange={(e) => handleChange("intermediate", e.target.value)}
            //   inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid size={{xs: 12, sm:6}}>
            <TextField
              fullWidth
              label="Number of Advanced Players"
              type="text"
              inputMode="numeric"
              value={String(divisions.advanced)}
              onChange={(e) => handleChange("advanced", e.target.value)}
            //   inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid size={{xs: 12, sm:6}}>
            <TextField
              fullWidth
              label="Number of Open Players"
              type="text"
              inputMode="numeric"
              value={String(divisions.open)}
              onChange={(e) => handleChange("open", e.target.value)}
            //   inputProps={{ min: 0 }}
            />
          </Grid>
         <Grid size={{xs: 12, sm:6}}>
            <TextField
              fullWidth
              label="Number of Women's Amateur Players"
              type="text"
              inputMode="numeric"
              value={String(divisions.womensAmateur)}
              onChange={(e) => handleChange("womensAmateur", e.target.value)}
            //   inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid size={{xs: 12, sm:6}}>
            <TextField
              fullWidth
              label="Number of Women's Open Players"
              type="text"
              inputMode="numeric"
              value={String(divisions.womensOpen)}
              onChange={(e) => handleChange("womensOpen", e.target.value)}
            //   inputProps={{ min: 0 }}
            
            />
          </Grid>
        </Grid>

        <Card sx={{ mt: 4, bgcolor: "#e8f5e9" }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Mixed Division Total Prize Money:
            </Typography>
            <Typography variant="h3" sx={{ color: "#2e7d32", fontWeight: 700 }}>
              ${mixedDivisionTotal.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 4, bgcolor: "#e8f5e9" }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Women's Division Total Prize Money:
            </Typography>
            <Typography variant="h3" sx={{ color: "#2e7d32", fontWeight: 700 }}>
              ${womensDivisionTotal.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PayoutCalculation;