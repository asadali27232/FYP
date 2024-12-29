from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.shortcuts import render
import os
from .ecg import ECG


@csrf_exempt
def process_ecg(request):
    if request.method == 'POST' and request.FILES.get('ecg_image'):
        ecg_image = request.FILES['ecg_image']
        file_path = default_storage.save('temp.jpg', ecg_image)
        absolute_path = default_storage.path(
            file_path)  # Get the absolute path

        try:
            ecg = ECG()
            gray_image = ecg.GrayImgae(absolute_path)
            leads = ecg.DividingLeads(absolute_path)

            if leads is None:
                os.remove(absolute_path)
                return JsonResponse({'error': 'Failed to process leads'}, status=500)

            processed_leads = ecg.PreprocessingLeads(leads)

            if processed_leads is None:
                os.remove(absolute_path)
                return JsonResponse({'error': 'Failed to preprocess leads'}, status=500)

            ecg.SignalExtraction_Scaling(processed_leads)
            final_data = ecg.CombineConvert1Dsignal()
            reduced_data = ecg.DimensionalReduciton(final_data)
            classification_result = ecg.ModelLoad_predict(reduced_data)

            # Return the classification result
            return JsonResponse({'result': classification_result})

        finally:
            # Clean up the temporary file
            if os.path.exists(absolute_path):
                os.remove(absolute_path)

    return JsonResponse({'error': 'Invalid request'}, status=400)


def home(request):
    return render(request, 'ecg_app/upload.html')
