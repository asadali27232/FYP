from django.http import JsonResponse
import google.generativeai as genai

# Set up Google API key
genai.configure(api_key="YOUR_API_KEY")


def generate_response(request):
    # Retrieve query from GET parameters
    query = request.GET.get('query', '')

    if not query:
        return JsonResponse({"error": "Query parameter is required"}, status=400)

    # Use the generative model to get a response
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(query)

    # Return the generated response as JSON
    return JsonResponse({"response": response.text})
