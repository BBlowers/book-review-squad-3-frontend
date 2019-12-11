import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../../components/pageWrapper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import useStyles from '../../styles'
import { fakeRequest } from '../../apiFetch'


const fakeReviews = [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }, { text: '6' }, { text: '7' }, { text: '8' }];

const Reviews = () => {
  const params = useParams()
  const classes = useStyles()
  const [reviews, setReviews] = useState(null)

  useEffect(() => { // todo: handle
    fakeRequest(`book/${params.id}/reviews`, fakeReviews).then(res => res.json()).then((json) => {
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
                  <span style={{ float: 'right' }}>
                      Rating
                  </span>
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
