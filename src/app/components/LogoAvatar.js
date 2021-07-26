import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import { Link as RouterLink } from 'react-router-dom'

export default function LogoAvatar () {
  return (
    <RouterLink to='/'>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
    </RouterLink>
  )
}
