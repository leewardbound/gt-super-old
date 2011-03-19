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
Requirements: Linux, python, redis, sqlite, pip, virtualenv, a webserver 
    (nginx and apache configurations included)
    You also need SVN, git and mercurial to download all the dependencies
    On ubuntu 9.10+ do:
    
    sudo apt-get install python{,-setuptools,-sqlite} redis-server \
      subversion mercurial git-core
    easy_install virtualenv, pip

Developers:
    You additionally need Compass, Sass and Pyjamas installed to compile
    the SCSS and PyvaScript (*.pyva) files in /static/.
    Compass and Sass can easily be installed with:

    sudo apt-get install compass

    Pyjamas installation is a little trickier -- Get pyjamas here:
    http://sourceforge.net/projects/pyjamas/

    Then extract the archive, bootstrap it and build it:

    wget http://downloads.sourceforge.net/project/pyjamas/pyjamas/0.7/pyjamas-0.7.tgz
    gunzip pyjamas-0.7.tgz
    cd pyjamas-0.7
    python bootstrap.py
    python run_bootstrap_first_then_setup.py install


Install process:
  # Get the repo
  git clone http://github.com/linked/globetrotter.git
  cd globetrotter

  # Setup virtualenv, use it
  virtualenv ./env
  source env/bin/activate

  # Install python dependencies into virtualenv
  python bootstrap.py

  cd www/

  # Maxmind's geoip
  wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz
  gunzip GeoIP.dat.gz

  # Database migrations
  python manage.py syncdb

  # Setup apache with example config (on ubuntu)
  ln -s `pwd`/apache.conf /etc/apache2/sites-enabled/globetrotter
  /etc/init.d/apache2 restart
