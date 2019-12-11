import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useStyles from '../styles'
import { Link, useParams } from 'react-router-dom'

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
        {children || null}
      </main>
    </React.Fragment>
  );
}

export default PageWrapper
