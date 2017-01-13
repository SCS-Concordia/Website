from django.shortcuts import render
from django.http import HttpResponse
import datetime
import os

mailingListLink = "http://scsconcordia.us12.list-manage2.com/subscribe?u=4c052a132d5eb23fe2e2712b9&id=22644f4443";

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

def current(request):
	now = datetime.datetime.now()
	return render(request, 'app/current.html', {'year':now.year})

def events(request):
	now = datetime.datetime.now()
	return render(request, 'app/events.html', {'year':now.year})

def calendar(request):
	now = datetime.datetime.now()
	return render(request, 'app/calendar.html', {'year':now.year})

def competitions(request):
	now = datetime.datetime.now()
	return render(request, 'app/competitions.html', {'year':now.year})

def past(request):
	now = datetime.datetime.now()
	return render(request, 'app/past.html', {'year':now.year})

def contact(request):
	now = datetime.datetime.now()
	return render(request, 'app/contact.html', {'year':now.year})

def faq(request):
	now = datetime.datetime.now()
	return render(request, 'app/faq.html', {'year':now.year,'mailingList':mailingListLink})

def involved(request):
	now = datetime.datetime.now()
	return render(request, 'app/involved.html', {'year':now.year,'mailingList':mailingListLink})

def learning(request):
	now = datetime.datetime.now()
	return render(request, 'app/learning.html', {'year':now.year,'mailingList':mailingListLink})