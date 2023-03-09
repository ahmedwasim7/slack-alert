const express = require('express')
const { WebClient } = require('@slack/web-api')

const router = express.Router()

router.post('/spam', (req, res) => {
  const payload = req.body
   
  if (payload.Type !== 'SpamNotification') {
    return res.status(200).send({message: 'No Alert'})
  }

  const client = new WebClient(process.env.API_KEY)

  client.chat.postMessage({
    channel: process.env.CHANNEL_NAME,
    text: `Spam alert! Email: ${payload.Email}`
  })
    .then(() => res.status(200).send({message: 'Alert message has been sent'}))
    .catch(err => res.status(404).send({message: err}))
})

module.exports = router
