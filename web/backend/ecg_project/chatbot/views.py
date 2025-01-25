import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from groq import Groq


@csrf_exempt
def chat_response(request):
    if request.method == "POST":
        # Get the user message from request body (assuming JSON)
        user_message = request.POST.get(
            "message", "Explain the importance of fast language models")

        # Load API key and initialize the client
        api_key = "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"
        if not api_key:
            return JsonResponse({"error": "GROQ_API_KEY environment variable is not set."}, status=500)

        try:
            client = Groq(api_key=api_key)  # Initialize the Groq client

            chat_completion = client.chat.completions.create(
                messages=[{"role": "user", "content": user_message}],
                model="llama-3.3-70b-versatile",
            )

            # Return the message content from the response
            response_message = chat_completion.choices[0].message.content
            return JsonResponse({"response": response_message}, status=200)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method."}, status=400)
