import EquipmentSet from './EquipmentSet'
import { Container, Grid } from '@mui/material'

const sets = [
  'AlphaBridge',
  'Sombra de Banshee',
  'D3-FNC',
  'DeadEYE',
  'Último Recurso',
  'FireCrest',
  'Credo del Cazador',
  'Estrella Solitaria',
  'Senda del Nómada',
  'Marca del Depredador',
  'Reclamación',
  'Vigilante',
  'Atacante',
  'Autoridad Táctica',
]

export default function EquipmentList() {
  return (
    <Container>
      <Grid container spacing={1}>
        {sets.map((set) => (
          <Grid item xs={12} sm={6} md={4} key={set}>
            <EquipmentSet name={set} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
