from django import forms
from .models import User
from django.core import validators

class StudentRegistration(forms.ModelForm):
    class Meta:
        model =  User
        fields = ["name", "email", "password"]
        widgets = {
            "name": forms.TextInput(attrs={"class":"form-control", "placeholder":"Enter Your Name", "id":"nameid"}),
            "email": forms.EmailInput(attrs={"class":"form-control", "placeholder":"Enter Your Email","id":"emailid" }),
            "password": forms.PasswordInput(attrs={"class":"form-control", "placeholder":"Enter Password", "id":"passwordid"})
        }
