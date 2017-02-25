'use strict';
const _ =require('lodash');
const JsonStore = require('./json-store');

const linkstore = {

  store: new JsonStore('./models/linkstore.json', { linkCollection: [] }),
  collection: 'linkCollection',

  getAllLinklists(){
  	return this.store.findAll(this.collection);
  },

  getLink(id){
  	return this.store.findOneBy(this.collection, {id: id});
  },

  removeLink(id, linkId){
  	const linklist = this.getLink(id);
  	const links = linklist.links;
  	_.remove(linklist.links, { id: linkId });
  },

  removeLinkList(id) {
    const linklist = this.getLink(id);
    this.store.remove(this.collection, { id: id });
  },

  addLink(id, link){
  	const linklist = this.getLink(id);
  	linklist.links.push(link);
  },

  addLinkList(linklist) {
	this.store.add(this.collection, linklist);
  },

  getLinkCount() {
    const linklist = this.getAllLinklists();
    let count = 0

     for (let i = 0; i < linklist.length; i++){

     	count += linklist[i].links.length;
     	}
     return count; 
    },
};

module.exports = linkstore;
