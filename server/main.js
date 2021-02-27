import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'
import express from 'express'
import { LinksCollection } from '../imports/api/links'

Meteor.startup(() => {
  const app = express()
  app.get('/hello', (req, res) => {
    LinksCollection.insert({ name: 'test' })
    res.json('Hello')
  })
  WebApp.connectHandlers.use(app)
})
