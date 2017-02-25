'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const linklist = require('./controllers/linklist.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/linklist/:id', linklist.index);
router.get('/linklist/:id/deletelink/:linkid', linklist.deleteLink);
router.get('/dashboard/deletelinklist/:id', dashboard.deleteLinkList);
router.post('/linklist/:id/addlink', linklist.addLink);
router.post('/dashboard/addlinklist', dashboard.addLinkList);
router.post('/about/addcomment', about.addComment);

module.exports = router;
