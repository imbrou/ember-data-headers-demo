# Headers

This minimal app reproduces an issue I've been stuck on for 3 days now:  
[http://stackoverflow.com/q/33684353/5097905](http://stackoverflow.com/q/33684353/5097905)  
  
The idea was simply to add custom headers to my ember-data requests.  
My current fail-count is: 7 (I'll keep this up-to-date).  
You can find my epic attempts in:  
- `app/adapters/application.js`
- `app/app.js`  
In comments are the links to each relevant topic. (said Yoda).

A demo API endpoint is deployed at [http://broubrou.olympe.in/util/stack/headers-demo/api](http://broubrou.olympe.in/util/stack/headers-demo/api) .
If you are interested in its (5 lines of) PHP, or want to run it locally, you can find it in the `api` folder.

## Prerequisites

* Big balls
* Patience
* Courage
* Karma

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your buggy app at [http://localhost:4200](http://localhost:4200). :-)

