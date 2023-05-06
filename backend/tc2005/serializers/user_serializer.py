# from rest_framework import serializers
# from tc2005.models import User
# from .permission_serializer import PermissionSerializer;

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     total_score = serializers.CharField()
#     average_score = serializers.CharField()
#     user_permissions = PermissionSerializer(many=True, read_only=True)
    

    
#     class Meta:
#         model = User
#         fields = "__all__"
#         # extra_kwargs = {
#         #     "password": {
#         #         "write_only":True,
#         #         "style":{"input_type":"password"}
#         #     }
#         # }

# class LoginSerializer(serializers.Serializer):
#     password = serializers.CharField(

#         required=True,
#         style={'input_type': 'password'}
#     )
#     email = serializers.CharField(

#         required=True,
#     )

# class ChangePasswordSerializer(serializers.Serializer):
#     password = serializers.CharField(

#         required=True,
#         style={'input_type': 'password'}
#     )
        

from rest_framework import serializers
from tc2005.models import User
from .permission_serializer import PermissionSerializer

class UserSerializer(serializers.HyperlinkedModelSerializer):
    total_score = serializers.IntegerField(read_only=True)
    average_score = serializers.FloatField(read_only=True)
    best_score = serializers.IntegerField(read_only=True)
    worst_score = serializers.IntegerField(read_only=True)
    average_time = serializers.FloatField(read_only=True)
    number_of_times_completed = serializers.IntegerField(read_only=True)
    user_permissions = PermissionSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = "__all__"

class LoginSerializer(serializers.Serializer):
    password = serializers.CharField(
        required=True,
        style={'input_type': 'password'}
    )
    email = serializers.CharField(
        required=True,
    )

class ChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        required=True,
        style={'input_type': 'password'}
    )
