import { set, sub } from 'date-fns';
import { useState, useRef, useEffect } from 'react';
// @mui
import {
    Box,
    List,
    Badge,
    Button,
    Avatar,
    Tooltip,
    Divider,
    Popover,
    Typography,
    IconButton,
    ListItemText,
    ListSubheader,
    ListItemAvatar,
    ListItemButton,
} from '@mui/material';
import { Notifications, DoneAll } from '@mui/icons-material';
import { Drawer } from '@mui/material';

// Svg
import OrderPlaced from '../../../assets/icons/ic_notification_package.svg';
import Shipping from '../../../assets/icons/ic_notification_shipping.svg';
import Mail from '../../../assets/icons/ic_notification_mail.svg';
import Chat from '../../../assets/icons/ic_notification_chat.svg';
//Svg//

// utils
import { fToNow } from '../../../utils';

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
    {
        id: 1,
        title: 'Your order is placed',
        description: 'waiting for shipping',
        avatar: null,
        type: 'order_placed',
        createdAt: set(new Date(), { hours: 10, minutes: 30 }),
        isUnRead: true,
    },
    {
        id: 1,
        title: 'Kathy Emard',
        description: 'answered to your comment on the Minimal',
        avatar: 'src/assets/icons/avatarD.svg',
        type: 'friend_interactive',
        createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
        isUnRead: true,
    },
    {
        id: 2,
        title: 'You have new message',
        description: '5 unread messages',
        avatar: null,
        type: 'chat_message',
        createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
        isUnRead: false,
    },
    {
        id: 3,
        title: 'You have new mail',
        description: 'sent from Guido Padberg',
        avatar: null,
        type: 'mail',
        createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
        isUnRead: false,
    },
    {
        id: 4,
        title: 'Delivery processing',
        description: 'Your order is being shipped',
        avatar: null,
        type: 'order_shipped',
        createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
        isUnRead: false,
    },
];

export default function NotificationBar () {
    const [notifications, setNotifications] = useState(NOTIFICATIONS);

    const totalUnRead = notifications.filter(item => item.isUnRead === true).length;

    const [open, setOpen] = useState(false);

    const handleOpen = event => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications.map(notification => ({
                ...notification,
                isUnRead: false,
            })),
        );
    };

    return (
        <span>
            <IconButton color={open ? 'primary' : 'default'} onClick={handleOpen} sx={{ width: 40, height: 40, paddingX: 2 }}>
                <Badge badgeContent={totalUnRead} color='error'>
                    <Notifications />
                </Badge>
            </IconButton>
            <Drawer
                anchor='right'
                open={open}
                onClose={handleClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        borderRadius: 0,
                        width: '28vw',
                        height: '100%',
                        backgroundColor: 'white',
                        boxShadow: 'none',
                    },
                }}
            >
                <div className='bg-[#F8F8FF] '>
                    <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography className='text-black' variant='subtitle1'>
                                Notifications
                            </Typography>
                            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                You have {totalUnRead} unread messages
                            </Typography>
                        </Box>

                        {totalUnRead > 0 && (
                            <Tooltip title=' Mark all as read'>
                                <IconButton color='primary' onClick={handleMarkAllAsRead}>
                                    <DoneAll />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                </div>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <List
                    disablePadding
                    subheader={
                        <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                            New
                        </ListSubheader>
                    }
                >
                    {notifications.slice(0, 2).map(notification => (
                        <NotificationItem key={notification.id} notification={notification} />
                    ))}
                </List>

                <List
                    disablePadding
                    subheader={
                        <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                            Before that
                        </ListSubheader>
                    }
                >
                    {notifications.slice(2, 5).map(notification => (
                        <NotificationItem key={notification.id} notification={notification} />
                    ))}
                </List>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Box sx={{ p: 1 }}>
                    <Button fullWidth disableRipple>
                        View All
                    </Button>
                </Box>
            </Drawer>
        </span>
    );
}

// ----------------------------------------------------------------------

function NotificationItem ({ notification }) {
    const { title } = renderContent(notification);

    return (
        <ListItemButton
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',
                ...(notification.isUnRead && {
                    bgcolor: 'action.selected',
                }),
            }}
        >
            <ListItemText
                primary={title}
                secondary={
                    <Typography
                        variant='caption'
                        sx={{
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.disabled',
                        }}
                    >
                        {fToNow(notification.createdAt)}
                    </Typography>
                }
            />
        </ListItemButton>
    );
}

// ----------------------------------------------------------------------

function renderContent (notification) {
    const title = (
        <Typography variant='subtitle2'>
            <span className='text-black'>{notification.title}</span>
            <Typography component='span' variant='body2' sx={{ color: 'text.secondary' }}>
                &nbsp; {notification.description}
            </Typography>
        </Typography>
    );

    if (notification.type === 'order_placed') {
        return {
            avatar: <img alt={notification.title} src={OrderPlaced} />,
            title,
        };
    }
    if (notification.type === 'order_shipped') {
        return {
            avatar: <img alt={notification.title} src={Shipping} />,
            title,
        };
    }
    if (notification.type === 'mail') {
        return {
            avatar: <img alt={notification.title} src={Mail} />,
            title,
        };
    }
    if (notification.type === 'chat_message') {
        return {
            avatar: <img alt={notification.title} src={Chat} />,
            title,
        };
    }
    return {
        avatar: notification.avatar ? <img alt={notification.title} src={notification?.avatar} /> : null,
        title,
    };
}
