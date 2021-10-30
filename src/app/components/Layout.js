import React from 'react'
import AppBar from './AppBar'
import SideBar from './SideBar'
import Box from '@mui/material/Box'

export default function Layout ({ children }) {
  const drawerWidth = 240

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar leftMargin={{ drawerWidth }} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <SideBar />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {children}
      </Box>
    </Box>
  )
}
