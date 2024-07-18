from django.urls import path
from .views import SkillList, SkillDetail

urlpatterns = [
    path('skills/', SkillList.as_view(), name='skills'),
]
