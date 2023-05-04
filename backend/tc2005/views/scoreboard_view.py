from rest_framework import viewsets
from tc2005.models import Scoreboard
from tc2005.serializers.scoreboard_serializer import ScoreboardSerializer, ScoreSerializer
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import  status
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q

from ..models import User

class ScoreboardView(viewsets.ModelViewSet):
    queryset = Scoreboard.objects.all() # Select * from user;
    serializer_class = ScoreboardSerializer
    authentication_classes = (SessionAuthentication, TokenAuthentication, )
    permission_classes = [IsAuthenticated]

    @action(methods=["POST"],  detail=False, serializer_class=ScoreSerializer, permission_classes=[IsAuthenticated])
    def register_score(self, request):

        serializer = ScoreSerializer(data=request.data)

        if serializer.is_valid():
            user = User.objects.get(email=request.user)
            score = Scoreboard.objects.create(
                user=user,
                score=serializer.validated_data["score"]
            )
            score.save()
        
            return Response({"detail": "Score saved"}, status=status.HTTP_200_OK) 
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    @action(methods=["GET"],  detail=False, permission_classes=[IsAuthenticated])
    def current_user_scores(self, request):
        user = User.objects.filter(email = request.user)[0]
        scoreboard = Scoreboard.objects.filter(user = user)
        print(user)
        serializer = ScoreboardSerializer(instance = scoreboard,many = True, context = {'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=["GET"],  detail=False, permission_classes=[IsAuthenticated])
    def filter_user_scores(self, request):
        user = User.objects.filter(email = request.user)[0]
        scoreboard = Scoreboard.objects.filter(user = user, score__gt=200)
        print(user)
        serializer = ScoreboardSerializer(instance = scoreboard,many = True, context = {'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
    


    @action(methods=["GET"], detail=False, permission_classes=[IsAuthenticated])
    def specific_user_scores(self, request):
        specific_email = request.query_params.get('email', None)
        if specific_email:
            specific_user = User.objects.filter(email=specific_email).first()
            if specific_user:
                scoreboard = Scoreboard.objects.filter(user=specific_user)
                serializer = ScoreboardSerializer(instance=scoreboard, many=True, context={'request': request})
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "Email parameter is required"}, status=status.HTTP_400_BAD_REQUEST)
