from rest_framework import serializers
from tc2005.models import Profile
from .user_serializer import UserSerializer

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = "__all__"

class ImageSerializer(serializers.Serializer):
    image = serializers.ImageField(required=True)