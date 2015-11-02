# Warmup.Design

A daily design warmup to help designers get better at design.

# TODO

* Profile view
* Submit warmup view
* Contribute view (just a simple form to give designers to get a prompt from them)
* Login, register, recover password, signup
* Figure out how to get the cards to take up the right amount of space even before the image loads. Maybe sprinkle some loading spinners in there too?
* Fix Twitter login
* Image upload to an S3 bucket

# Setup

* If you don't have meteor installed, run `curl https://install.meteor.com/ | sh`
* Clone the repo
* Run `npm start` from the app directory, which will serve the app to http://localhost:3000
* Run `meter mongo` to do database stuff directly
* To reset the database and fill it with junk data again, stop the server, run `meteor reset`, then `npm start` again