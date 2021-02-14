import React, {useState} from 'react';
import clsx from 'clsx';

//styling
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    AppBar,
    Drawer,
    Toolbar,
    List,
    CssBaseline,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton

} from '@material-ui/core';

import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Announcement as AnnouncementIcon,
    Dashboard as DashboardIcon
} from '@material-ui/icons';

import transmog from '../icons/transmog.png';
import dashboard from '../icons/dashboard.png';
import commands from '../icons/commands.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: 'Teko',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#c12b12'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  h2: {
    marginLeft: '380px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideNav() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        <h2 className={classes.h2}>The Rock Game Shop</h2>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button>
                <ListItemIcon> <img src={dashboard} width='20px' height='20px' margin-top='6%' border-radius='5px' margin-left='10px'/></ListItemIcon>
                <ListItemText style={{'marginLeft': '10px'}}>Dashboard</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon> <img src={commands} width='20px' height='20px' margin-top='6%' border-radius='5px' margin-left='10px'/></ListItemIcon>
                <ListItemText style={{'marginLeft': '10px'}}>Commands</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon> <img src={transmog} width='20px' height='20px' margin-top='6%' border-radius='5px' margin-left='10px'/></ListItemIcon>
                <ListItemText style={{'marginLeft': '10px'}}>Rate my mog</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon> <img src={transmog} width='20px' height='20px' margin-top='6%' border-radius='5px' margin-left='10px'/></ListItemIcon>
                <ListItemText style={{'marginLeft': '10px'}}>Roster</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon> <img src={transmog} width='20px' height='20px' margin-top='6%' border-radius='5px' margin-left='10px'/></ListItemIcon>
                <ListItemText style={{'marginLeft': '10px'}}>Xyron Ratings</ListItemText>
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}