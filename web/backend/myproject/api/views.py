from rest_framework.views import APIView
from rest_framework.response import Response


class HelloWorldView(APIView):
    def get(self, request):
        return Response({"message": "Hello, World! I am a React (JS) app and I am connected to a Python Django Server. The message you are reading is coming from the Django API."})

