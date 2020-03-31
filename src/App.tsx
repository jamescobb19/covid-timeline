import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import HorizontalTimelineContent from './components/HorizontalTimelineContent';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Load timeline data
const data = require('./data.json');

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    logo: {
      margin: theme.spacing(1),
      color: 'inherit',
      height: 32,
      width: 32,
      fill: 'inherit',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
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
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
  }),
);

class App extends React.Component {
  data: object[];

  //classes = useStyles();
  
  constructor(props: any) {
    super(props);
    this.data = []
    this.state = { value: 0, previous: 0 };
  }

  componentWillMount() {
    this.data = data.map((item: any) => {
      return ({
        date: item.date,
        component: (
          <div className='container' key={item.title}>
            <h1>{ item.title}</h1>
            <h2>{ `Type: ${item.type}` }</h2>
            <hr />
            <p>{ item.description}</p>
            <hr />
          </div>
        )
      });
    });
  }
  
  render() {
  return (
    <div
    //className={this.classes.root}
    >{/*
      <CssBaseline />
      <AppBar
        position="absolute"
      >
        <Toolbar 
        //className={this.classes.toolbar}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            //className={this.classes.title}
          >
            COVID-19 Timeline
          </Typography>
        </Toolbar>
    </AppBar>*/}
      <main 
      //className={this.classes.content}
      >
        <div 
        //className={this.classes.appBarSpacer} 
        />
        <Container maxWidth="lg" 
        //className={this.classes.container}
        >
          <HorizontalTimelineContent content={this.data} />
        </Container>
      </main>
    </div>
  )};
};

export default App;
