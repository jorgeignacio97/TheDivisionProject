import { useState, useEffect } from 'react'
import EquipmentItem from './EquipamientoItem'
import { Paper, Typography, Box } from '@mui/material'

import alphaBridgeIcon from '../assets/icons/AlphaBridge.svg'
import bansheesShadowIcon from '../assets/icons/SombraBanshee.svg'
import d3fncIcon from '../assets/icons/D3-FNC.svg'
import deadEYEIcon from '../assets/icons/DeadEye.svg'
import finalMeasureIcon from '../assets/icons/UltimoRecurso.svg'
import fireCrestIcon from '../assets/icons/FireCrest.svg'
import huntersFaithIcon from '../assets/icons/CredoCazador.svg'
import loneStarIcon from '../assets/icons/EstrellaSolitaria.svg'
import pathOfTheNomadIcon from '../assets/icons/Nomada.svg'
import predatorsMarkIcon from '../assets/icons/MarcaDepredador.svg'
import reclaimerSetIcon from '../assets/icons/Reclamador.svg'
import sentrysCallIcon from '../assets/icons/Centinela.svg'
import strikersBattlegearIcon from '../assets/icons/Atacante.svg'
import tacticiansAuthorityIcon from '../assets/icons/AutoridadTactica.svg'

type EquipmentSetProps = {
  name: string
}

type EquipmentItems = {
  chest: number
  mask: number
  kneePads: number
  backpack: number
  gloves: number
  holster: number
}

const initialItems: EquipmentItems = {
  chest: 0,
  mask: 0,
  kneePads: 0,
  backpack: 0,
  gloves: 0,
  holster: 0,
}

const iconMap: Record<string, string> = {
  AlphaBridge: alphaBridgeIcon,
  'Sombra de Banshee': bansheesShadowIcon,
  'D3-FNC': d3fncIcon,
  DeadEYE: deadEYEIcon,
  'Último Recurso': finalMeasureIcon,
  FireCrest: fireCrestIcon,
  'Credo del Cazador': huntersFaithIcon,
  'Estrella Solitaria': loneStarIcon,
  'Senda del Nómada': pathOfTheNomadIcon,
  'Marca del Depredador': predatorsMarkIcon,
  Reclamación: reclaimerSetIcon,
  Vigilante: sentrysCallIcon,
  Atacante: strikersBattlegearIcon,
  'Autoridad Táctica': tacticiansAuthorityIcon,
}

export default function EquipmentSet({ name }: EquipmentSetProps) {
  const [items, setItems] = useState<EquipmentItems>(() => {
    const savedItems = localStorage.getItem(name)
    return savedItems ? JSON.parse(savedItems) : initialItems
  })

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(items))
  }, [name, items])

  const incrementItem = (itemName: keyof EquipmentItems) => {
    setItems((prev) => ({ ...prev, [itemName]: prev[itemName] + 1 }))
  }

  const decrementItem = (itemName: keyof EquipmentItems) => {
    setItems((prev) => ({ ...prev, [itemName]: Math.max(prev[itemName] - 1, 0) }))
  }

  return (
    <Paper elevation={3} style={{ padding: '8px', marginBottom: '8px' }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ padding: '3px', marginBottom: '5px' }}
      >
        <img
          src={iconMap[name]}
          alt={name}
          className="icon-green"
          style={{ width: '40px', marginRight: '8px' }}
        />
        <Typography variant="subtitle1" gutterBottom>
          {name}
        </Typography>
      </Box>
      {Object.keys(items).map((item) => (
        <EquipmentItem
          key={item}
          name={item}
          count={items[item as keyof EquipmentItems]}
          onIncrement={() => incrementItem(item as keyof EquipmentItems)}
          onDecrement={() => decrementItem(item as keyof EquipmentItems)}
        />
      ))}
    </Paper>
  )
}
