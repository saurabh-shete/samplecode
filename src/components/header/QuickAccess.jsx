import * as React from 'react';
import { Box, Divider, Grid, IconButton, MenuItem, Popover, Stack, Typography } from '@mui/material';
import { Add, ArrowDropDown, Settings } from '@mui/icons-material';
import { useState } from 'react';

export default function QuickAccess() {
  const [open, setOpen] = useState(null);
  const [activeContent, setActiveContent] = useState('allUsers'); // Default active content

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const columns = [
    // Your columns data here...
  ];

  const Item = ({ label, onClick, key }) => (
    <Box key={key} onClick={onClick} className="text-[#7B7B7B] cursor-pointer" sx={{ fontSize: 15 }} m={1}>
      <Add />
      {label}
    </Box>
  );

  const Header = ({ title, key }) => (
    <MenuItem key={key}>
      <Typography fontWeight="bold" className="text-[#7B7B7B] cursor-pointer" mt={1}>
        {title}
      </Typography>
    </MenuItem>
  );

  return (
    <>
      <div className="text-[#7B7B7B] cursor-pointer p-4 ml-4" onClick={handleOpen}>
        Quick Access
        <ArrowDropDown className="cursor-pointer" />
      </div>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 400,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
            minHeight: 250,
          },
        }}
      >
        <Grid container spacing={2}>
          {columns?.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Header title={item.title} key={i} />
                {/* Conditionally render based on active content */}
                {activeContent === 'allUsers' ? (
                  item.items?.map((subItem, j) => (
                    <Item key={j} label={subItem.label} onClick={subItem.onClick} />
                  ))
                ) : (
                  // Render roles content (adjust as needed)
                  // For example: item.itemsRoles?.map(...)
                  <div>Roles Content Here</div>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Popover>
    </>
  );
}
