from __future__ import with_statement
# Config

host_to_hit = "localhost" #bot host
num = 50
rate_limit = 20
concurrent = 5

errors = []
import settings, warnings
warnings.simplefilter('ignore', DeprecationWarning)
warnings.simplefilter('ignore', ImportWarning)
from django.core.management import setup_environ
setup_environ(settings)
from apps.route.models import RuleSet
import datetime, time, random, os, hashlib, sys
import re
import gevent
import random
from gevent import monkey
from gevent import queue
from gevent import socket
from gevent import pool as geventpool
from urllib2 import urlopen
monkey.patch_socket()
import time
hits = 0
track = time.time()
print "URL: %s"%host_to_hit
route_id = RuleSet.objects.get(nickname='123').pk
url = 'http://%s/route/%s'%(host_to_hit,route_id)
d = lambda: random.randint(11,220)
def scraper(pool):
    with gevent.Timeout(30, False):
        try:
            #random_ip = '%s.%s.%s.%s'%(d(), d(), d(), d())
            urlopen(url)
        except Exception as e:
    	    print e, url
print "Benchmarking",num,"visitors to",host_to_hit
start = time.time()
pool = geventpool.Pool(50)
sub_num = min(num/10, 2500)
big_num = int(num/sub_num)
elapsed = 0
this_second = 0
last_elapsed = 0
for i in range(big_num):
	for x in range(sub_num):
	    elapsed = time.time() - start
	    last_elapsed = elapsed
            while rate_limit and this_second > rate_limit:
	        elapsed = time.time() - start
		if int(last_elapsed) != int(elapsed):
	            this_second = 0
                time.sleep(0.05)
		pool.join()
	    if int(last_elapsed) != int(elapsed):
	        this_second = 0
	    this_second += 1
	    pool.spawn(scraper,pool)
	pool.join()
	so_far = (1+i)*sub_num
	rate = so_far/elapsed
	print
	print int(so_far), "hits so far"
	print int(elapsed),"seconds elapsed"
	print int(rate),"visitors per second"
	print int(len(errors)),"errors"
print
print "Done!"
