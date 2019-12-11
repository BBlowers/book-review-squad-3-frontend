import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import useStyles from '../../styles'
import { apiFetch } from '../../apiFetch'

const fakeReviews = [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }, { text: '6' }, { text: '7' }, { text: '8' }];

const Likes = ({ reviewId }) => {
  const [likes, setLikes] = useState(null)

  useEffect(() => {
    apiFetch(`/book/review/${reviewId}/like`).then(res => res.json()).then((json) => {
      setLikes(json)
    })
  })

  return likes !== null && (
    <span style={{ float: 'right' }}>
      {likes}
    </span>
  )
}

const Reviews = ({ url }) => {
  const params = useParams()
  const classes = useStyles()
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    apiFetch(url).then(res => res.json()).then((json) => {
      setReviews(json)
    })
  })
  return reviews && (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {reviews.map(card => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  <Likes reviewId={card.id} />
                </Typography>
                <Typography style={{ width: '100%' }}>
                  {card.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Reviews
