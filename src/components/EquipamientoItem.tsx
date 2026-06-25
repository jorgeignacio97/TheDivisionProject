import { Typography, Box, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import chestIcon from '../assets/icons/Pecho.svg'
import maskIcon from '../assets/icons/Mascara.svg'
import kneePadsIcon from '../assets/icons/Rodilleras.svg'
import backpackIcon from '../assets/icons/Mochila.svg'
import glovesIcon from '../assets/icons/Guantes.svg'
import holsterIcon from '../assets/icons/Pistolera.svg'

type EquipmentItemProps = {
  name: string
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

const iconMap: Record<string, string> = {
  chest: chestIcon,
  mask: maskIcon,
  kneePads: kneePadsIcon,
  backpack: backpackIcon,
  gloves: glovesIcon,
  holster: holsterIcon,
}

const friendlyNames: Record<string, string> = {
  chest: 'Pecho',
  mask: 'Máscara',
  kneePads: 'Rodilleras',
  backpack: 'Mochila',
  gloves: 'Guantes',
  holster: 'Pistolera',
}

export default function EquipmentItem({
  name,
  count,
  onIncrement,
  onDecrement,
}: EquipmentItemProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={1}
      className={count > 0 ? 'item-box-active' : 'item-box'}
    >
      <Box display="flex" alignItems="center">
        <img
          src={iconMap[name]}
          alt={name}
          className="icon-green"
          style={{ width: '35px', marginRight: '8px' }}
        />
        <Typography className="nameItem" variant="body2">
          {friendlyNames[name]}{' '}
        </Typography>
        <Typography className="counter">{count}</Typography>
      </Box>
      <Box>
        <IconButton
          size="large"
          onClick={onIncrement}
          style={{ color: count > 0 ? '#ffffff' : '#4caf50' }}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          size="large"
          onClick={onDecrement}
          style={{ marginLeft: '5px', color: count > 0 ? '#ffffff' : '#f44336' }}
        >
          <RemoveIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
