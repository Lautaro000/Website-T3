from rest_framework import viewsets
from tc2005.models import Profile
from tc2005.serializers.profile_serializer import ProfileSerializer,ImageSerializer
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import  status
from ..models import User
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated

class ProfileView(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    authentication_classes = (SessionAuthentication, TokenAuthentication, )
    
    @action(methods=["GET"],  detail=False, permission_classes=[IsAuthenticated])
    def current_profile(self, request):
        user = User.objects.filter(email = request.user)[0]
        profile = Profile.objects.filter(user = user)
        print(user)
        serializer = ProfileSerializer(instance = profile,many = True, context = {'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK) 
    
    @action(methods=["GET"],  detail=True, permission_classes=[IsAuthenticated])
    def get_profile(self, request, pk):
        user = User.objects.filter(pk = pk)[0]
        profile = Profile.objects.filter(user = user)
        print(user)
        serializer = ProfileSerializer(instance = profile,many = True, context = {'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK) 

    @action(methods=["PUT"],  detail=False, serializer_class=ImageSerializer, permission_classes=[AllowAny])
    def change_picture(self, request):

        serializer = ImageSerializer(data=request.data)

        if serializer.is_valid():
            user = User.objects.get(email=request.user)
            profile = Profile.objects.get(user=user)
            profile.image = serializer.validated_data["image"]
            profile.save()
        
            return Response({"detail": "Image saved"}, status=status.HTTP_200_OK) 
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)