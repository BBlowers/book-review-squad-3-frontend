import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import PageWrapper from '../../components/pageWrapper'
import { useHistory } from 'react-router-dom'
import { fakeRequest } from '../../apiFetch'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory()
  const [book, setBook] = useState({
    name: '',
    author: '',
    publish_date: '',
    ISBN: ''
  })
  const handleChange = (key) => e => setBook({ ...book, [key]: e.target.value })
  const saveBook = () => { // todo: handle
    fakeRequest('/book', book).then(res => res.json()).then((json) => { // todo: POST
      history.push('/')
    })

  }

  return (
    <PageWrapper>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              onChange={handleChange('name')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="auth"
              label="author"
              name="author"
              onChange={handleChange('author')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="publish_date"
              label="publish_date"
              name="publish_date"
              onChange={handleChange('publish_date')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="ISBN"
              label="ISBN"
              name="ISBN"
              onChange={handleChange('ISBN')}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={saveBook}
        >
          Create Book
        </Button>
      </form>
    </PageWrapper>
  );
}
