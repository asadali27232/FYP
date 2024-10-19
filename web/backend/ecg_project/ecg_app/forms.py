# ecg_app/forms.py

from django import forms

class UploadFileForm(forms.Form):
    hea_file = forms.FileField(label='Select .hea file')
    dat_file = forms.FileField(label='Select .dat file')
    age = forms.FloatField(label='Enter Age')
    gender = forms.ChoiceField(label='Select Gender', choices=[(0, 'Male'), (1, 'Female')])
