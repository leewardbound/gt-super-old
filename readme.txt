=== Globetrotter ===
So you can stop fucking around with redirects!

An open-source routing system with a friendly admin interface.
Send your visitors to a Globetrotter link, and they'll be filtered
to individual destinations as you define.

Referrer-dependant destinations? Check. 
Time of day filters? Check. 
Geoparting? Check.
Test a variant with a random 5% of your traffic? Check.

Now quit dreaming of a system like this, and just use it!

=== Installation ===
Requirements: Linux, python, redis, sqlite, pip, virtualenv, a webserver (nginx and apache
    configurations included)
    On ubuntu 9.10+ do:
    
    sudo apt-get install python{,-setuptools,-sqlite} redis-server
    easy_install virtualenv, pip

Install process:
  # Get the repo
  git clone http://github.com/linked/globetrotter.git
  cd globetrotter

  # Setup virtualenv, use it
  virtualenv ./env
  source env/bin/activate

  # Install python dependencies into virtualenv
  python bootstrap.py

  # Setup apache with example config (on ubuntu)
  ln -s `pwd`/apache.conf /etc/apache2/sites-enabled/globetrotter
  /etc/init.d/apache2 restart

