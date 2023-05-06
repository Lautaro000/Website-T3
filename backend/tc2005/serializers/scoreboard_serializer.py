from rest_framework import serializers
from tc2005.models import Scoreboard
from .user_serializer import UserSerializer

class ScoreboardSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Scoreboard
        fields = "__all__"

class ScoreSerializer(serializers.Serializer):
    score = serializers.IntegerField(required=True)
    tasks = serializers.IntegerField(required=True)
    time = serializers.IntegerField(required=True)
    completed = serializers.BooleanField(required=True)
