import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../../components/pageWrapper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import useStyles from '../../styles'
import { apiFetch } from '../../apiFetch'
import Reviews from '../reviews'

const Book = () => {
  const params = useParams()
  const classes = useStyles()
  const [book, setBook] = useState(null)

  useEffect(() => { // todo: handle
    apiFetch(`/book/${params.id}`).then(res => res.json()).then((json) => {
      setBook(json)
    })
  })
  console.log(book)
  return (
    <PageWrapper>
      {book && (
        <Fragment>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {book.name}
              </Typography>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'space-around'}}>
              <Typography>
                Author: {book.author}
              </Typography>
              <Typography>
                ISBN: {book.ISBN}
              </Typography>
              <Typography>
                Publish Date: {book.publish_date}
              </Typography>
            </div>
          </div>
          <Reviews url={book.reviews} />
        </Fragment>
      )}
    </PageWrapper>
  )
}

export default Book
