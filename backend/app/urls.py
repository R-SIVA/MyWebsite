from django.urls import path
from .views import SkillList, SkillDetail, DomainList

urlpatterns = [
    path('skills/', SkillList.as_view(), name='skill-list'),
    path('skills/<int:pk>/', SkillDetail.as_view(), name='skill-detail'),
    path('domains/', DomainList.as_view(), name='domain-list'),
]
