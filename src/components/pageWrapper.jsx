import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useStyles from '../styles'
import { useParams, Link } from 'react-router-dom'

const PageWrapper = ({ children }) => {
  const classes = useStyles();
  const params = useParams()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {params.id && (
            <Typography variant="h6" color="inherit" noWrap>
              <Link to='/' style={{ color: 'white', cursor: 'pointer' }}>
                Back to books
              </Link>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <main>
        {children}
      </main>
    </React.Fragment>
  );
}

export default PageWrapper
