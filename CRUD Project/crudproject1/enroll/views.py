from django.shortcuts import render
from . forms import StudentRegistration
from .models import User
from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def add_show(request):
    
    fm = StudentRegistration()
    usr = User.objects.all()
    return render(request, 'enroll/addandshow.html', {"forms":fm, "users" :usr})
# @csrf_exempt

def savedata(request):
    if request.method== "POST":
        fm = StudentRegistration(request.POST)
        if fm.is_valid():
            nm = request.POST["name"]
            em = request.POST["email"]
            pw = request.POST["password"]
            User(name=nm, email=em, password=pw).save()
            stud = User.objects.values()
            student_data = list(stud)
            return JsonResponse({'status':'save', 'student_data':student_data})
        else:
            return JsonResponse({'status':0})
    

def delete_data(request):
    if request.method == "POST":
        stid = request.POST['stuid']
        usr = User.objects.filter(id=stid)
        if(usr.exists()):
            usr.delete()
            stud = User.objects.values()
            student_data = list(stud)
            return JsonResponse({'status':'delete','student_data':student_data})
        else:
            return JsonResponse({'status':0})
    else:
        return JsonResponse({'status':-1})

def edit_user(request):
    if request.method == "POST":
        stid = request.POST['stuid']
        usr = User.objects.filter(id=stid)
        if(usr.exists()):
            usd = User.objects.get(id=stid)
            stud = User.objects.values()
            student_data = list(stud)
            user_data = {'name': usd.name, 'email': usd.email, 'password': usd.password}
            return JsonResponse({'status':'edited','student_data':student_data , 'user_data': user_data})
        else:
            return JsonResponse({'status':0})
    else:
        return JsonResponse({'status':-1})