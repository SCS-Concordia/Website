from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^constitution$', views.constitution, name='constitution'),
    url(r'^current-executives$', views.current, name='current-executives'),
    url(r'^past-executives$', views.past, name='past-executives'),
    url(r'^events$', views.events, name='events'),
    url(r'^faq$', views.faq, name='faq'),
    url(r'^get-involved$', views.involved, name='get-involved'),
    url(r'^learning-packages$', views.learning, name='learning-packages'),
    url(r'^contact-us$', views.contact, name='contact-us'),
]