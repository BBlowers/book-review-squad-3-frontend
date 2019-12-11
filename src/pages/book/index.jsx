import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../../components/pageWrapper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useStyles from '../../styles'
import { fakeRequest } from '../../apiFetch'
import Reviews from '../reviews'

const fakeBook = {name: `name-${1}`, ISBN: 1, author: 'ben', publish_date: 'test'}

const Book = () => {
  const params = useParams()
  const classes = useStyles()
  const [book, setBook] = useState(null)

  useEffect(() => { // todo: handle
    fakeRequest(`/book/${params.id}`, fakeBook).then(res => res.json()).then((json) => {
      setBook(json)
    })
  })
  return book && (
    <PageWrapper>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {book.title}
          </Typography>
          <Typography>
            {book.author}
          </Typography>
          <Typography>
            {book.ISBN}
          </Typography>
          <Typography>
            {book.publish_date}
          </Typography>
        </Container>
      </div>
      <Reviews />
    </PageWrapper>
  )
}

export default Book
