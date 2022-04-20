import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link } from 'react-router-dom';

  
const styles = {
  sideNav: {
    marginTop: '-20px',
    zIndex: 1,
    marginLeft: '0px',
    position: 'fixed',
  },
  link: {
  
    color: 'gray',  
  }
};
  
export default class MaterialDrawer 
    extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpened: false,
    };
  }
  toggleDrawerStatus = () => {
    this.setState({
      isDrawerOpened: true,
    })
  }
  closeDrawer = () => {
    this.setState({
      isDrawerOpened: false,
    })
  }
  render() {
    const { isDrawerOpened } = this.state;
    return (
      <div>
            <div style={styles.sideNav}>
                <IconButton 
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={this.toggleDrawerStatus}
                >
                    {!isDrawerOpened ? <MenuIcon /> : null }
                </IconButton>
            </div>
            <Drawer
                id='drawer'
                variant="temporary"
                open={isDrawerOpened}
                onClose={this.closeDrawer}
                BackdropProps={{ invisible: true }}
            >
                <Link to='/about' className='Links' style={styles.link}>
                    <List>
                    <ListItem button key='About Us'>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary='About Us' />
                    </ListItem>
                    </List>
                </Link>
                <Link to='/contact' className='Links' style={styles.link}>
                <List>
                    <ListItem button key='Contact Us'>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary='Contact Us' />
                    </ListItem>
                    </List>
                </Link>
            </Drawer>
      </div>
    );
  }
}