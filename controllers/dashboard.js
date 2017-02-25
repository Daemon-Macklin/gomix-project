'use strict';

const logger = require('../utils/logger');
const linkstore  = require('../models/linkstore.js');
const uuid = require('uuid');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmarked links',
      links: linkstore.getAllLinklists(),
    };
     logger.info('about to render', linkstore.getAllLinklists());
    response.render('dashboard', viewData);
  },

   	deleteLinkList(request, response){
	 const linklistId = request.params.id;

	 logger.debug("Deleting linklist ${linklistId}");
	 linkstore.removeLinkList(linklistId);
	 response.redirect("/dashboard")
    },

    addLinkList(request, response){
    	const newLinkList={
    		id: uuid(),
    		title: request.body.title,
    		links:[],
    	};
    	linkstore.addLinkList(newLinkList);
    	logger.debug("Adding linklist ${linklistId}");
    	response.redirect('/dashboard');
    },
};

module.exports = dashboard;
