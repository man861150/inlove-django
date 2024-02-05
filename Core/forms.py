# forms.py

from django import forms

class LoveCounterForm(forms.Form):
    first_date = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}), label="Chọn ngày hẹn hò đầu tiên")
