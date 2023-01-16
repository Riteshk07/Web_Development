from django.urls import path
from .import views
urlpatterns= [
    path('' , views.add_show, name= 'add_show'),
    path('deletedata' , views.delete_data, name= 'delete_data'),
    path('editdata' , views.edit_user, name= 'edit_user'),
    path('savedata' , views.savedata, name= 'savedata'),
]