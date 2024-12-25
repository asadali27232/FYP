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

        ecg = ECG()
        image_path = file_path
        gray_image = ecg.GrayImgae(image_path)
        leads = ecg.DividingLeads(image_path)
        
        if leads is None:
            os.remove(file_path)
            return JsonResponse({'error': 'Failed to process leads'}, status=500)
        
        processed_leads = ecg.PreprocessingLeads(leads)
        
        if processed_leads is None:
            os.remove(file_path)
            return JsonResponse({'error': 'Failed to preprocess leads'}, status=500)
        
        ecg.SignalExtraction_Scaling(processed_leads)
        final_data = ecg.CombineConvert1Dsignal()
        reduced_data = ecg.DimensionalReduciton(final_data)
        classification_result = ecg.ModelLoad_predict(reduced_data)

        # Delete the temporary file
        os.remove(file_path)

        return JsonResponse({'result': classification_result})

    return JsonResponse({'error': 'Invalid request'}, status=400)

def home(request):
    return render(request, 'ecg_app/upload.html')