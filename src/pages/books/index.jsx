import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../../components/pageWrapper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import useStyles from '../../styles'
import { apiFetch } from '../../apiFetch'
import Button from '@material-ui/core/Button'

const Books = () => {
  const classes = useStyles()
  const [books, setBooks] = useState(null)

  useEffect(() => { // todo: handle
    apiFetch('/books').then(res => res.json()).then((json) => {
      setBooks(json)
    })
  })

  return books && (
    <PageWrapper>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Book review app
          </Typography>
          <Link to='/create'>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add book
            </Button>
          </Link>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {books.map((card, i) => (
            <Grid key={i} item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Link to={`book/book-number-${card}`}>
                      {card.name}
                    </Link>
                  </Typography>
                  <Typography>
                    {card.author}
                  </Typography>
                  <Typography>
                    {card.ISBN}
                  </Typography>
                  <Typography>
                    {card.publish_date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  )
}

export default Books
