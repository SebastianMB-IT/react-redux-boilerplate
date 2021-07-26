import React from 'react'
import AppBar from './AppBar'
import SideBar from './SideBar'
import Box from '@mui/material/Box'

export default function Layout ({ children }) {
  const drawerWidth = 240

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <SideBar />
      </Box>
      {children}
    </Box>
  )
}
