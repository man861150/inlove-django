from django.shortcuts import render
from .models import Person
from .forms import LoveCounterForm
from datetime import datetime


# Create your views here.
def calculate_love_days(first_date):
    today = datetime.now().date()
    love_days = (today - first_date).days
    return love_days

def index(request):
    # people = Person.objects.all()
    # context = {'people': people}
    # return render(request, "index.html", context)
    if request.method == 'POST':
        form = LoveCounterForm(request.POST)
        if form.is_valid():

            first_date = form.cleaned_data['first_date']
            print(first_date)
            love_days = calculate_love_days(first_date)
            return render(request, 'index.html', {'love_counter_form': form, 'love_days': love_days})
    else:
        my_first_date = datetime.strptime("2024-01-30", "%Y-%m-%d").date()
        love_days = calculate_love_days(my_first_date)
        form = LoveCounterForm(initial={'first_date': my_first_date})
    return render(request, 'index.html', {'love_counter_form': form, 'love_days': love_days})