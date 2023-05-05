from django.core.validators import MaxValueValidator
from django.db import models
from .user import User

class Scoreboard(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    score = models.IntegerField(default=0)
    tasks = models.IntegerField(default=0, validators=[MaxValueValidator(5)])
    time = models.IntegerField(default=0, validators=[MaxValueValidator(180)])
    completed = models.BooleanField(default=False)
