import React from 'react';
// Mui import  
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// Local import
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome';
import useAuth from '../../../Hooks/useAuth';
import ManageAllOrder from '../ManageAllOrders/ManageAllOrders';
import MakeReview from '../MakeReview/MakeReview';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const {admin,LogOut}=useAuth();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  

    return (
        <div>
             <Box sx={{ display: 'flex',}}>
      <CssBaseline />
      <AppBar sx={{background:"#51050F"}} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <Link to={`${url}`}><Button variant="inherit">
              dashboard</Button></Link>
          </Typography>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
      
        <DrawerHeader>
       
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <Link to={`/home`}><Button variant="inherit">
              Home</Button></Link>
            {
              admin&&<Box>
                  <Link to={`${url}/manageOrders`}><Button variant="inherit">
              Manage All Orders</Button></Link><br />
            <Link to={`${url}/AddProducts`}><Button variant="inherit">
              Add Product</Button></Link><br />
            <Link to={`${url}/makeAdmin`}><Button variant="inherit">
              Make Admin</Button></Link><br />
                </Box>
            }
            <Link to={`${url}/MyOrder`}><Button variant="inherit">
              My Order</Button></Link>
            <Link to={`${url}/makereview`}><Button variant="inherit">
              Make Review</Button></Link>
            <Link to={`${url}/pay`}><Button variant="inherit">
              Pay</Button></Link>
            <Button onClick={LogOut} variant="inherit">
              Log out</Button>
        <List>
       
        
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (

            <ListItem button key={text}>
                  

              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
      </Box>

      
    </Box>      
    <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/manageOrders`}>
         <ManageAllOrder></ManageAllOrder>
        </Route>
        <Route path={`${path}/AddProducts`}>
        <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/makeAdmin`}>
        <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/MyOrder`}>
        <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/makereview`}>
        <MakeReview></MakeReview>
        </Route>
        <Route path={`${path}/pay`}>
        <Pay></Pay>
        </Route>
      </Switch>
        </div>
    );
};

export default Dashboard;