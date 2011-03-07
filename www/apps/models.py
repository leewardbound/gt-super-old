from django.db import models
from django.contrib.auth.models import User

def randHash40(*args):
  """
    Generates a universally unique ID.
    Any arguments only create more randomness.
  """
  import time, random, hashlib
  t = long( time.time() * 1000 )
  r = long( random.random()*100000000000000000L )
  try:
    a = socket.gethostbyname( socket.gethostname() )
  except:
    # if we can't get a network address, just imagine one
    a = random.random()*100000000000000000L
  data = str(t)+' '+str(r)+' '+str(a)+' '+str(args)
  return hashlib.sha1(data).hexdigest()

class strong_id_model(models.Model):
    id = models.CharField(max_length=40, primary_key=True,
            default=randHash40, blank=True)
    class Meta: abstract = True

class user_owned_model(strong_id_model):
    user = models.ForeignKey(User)
    class Meta: abstract = True
