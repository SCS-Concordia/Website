from django.shortcuts import render
from django.http import HttpResponse
import datetime
import os

def index(request):
	now = datetime.datetime.now()
	return render(request, 'app/index.html', {'year':now.year})

def constitution(request):
	BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
	location = os.path.join(BASE_DIR, 'app', 'static', 'app', 'documents', 'constitution.pdf')
	with open(location, 'rb') as pdf:
			response = HttpResponse(
				pdf.read(), content_type='application/pdf')
			response['Content-Disposition'] = 'filename=constitution.pdf'
			return response