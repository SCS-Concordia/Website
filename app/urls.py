from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^constitution$', views.constitution, name='constitution'),
    url(r'^current-executives$', views.current, name='current-executives'),
    url(r'^events$', views.events, name='events'),
]