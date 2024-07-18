from rest_framework import serializers
from .models import Skill, Domain

class DomainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domain
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    domain = DomainSerializer(read_only=True)
    domain_id = serializers.PrimaryKeyRelatedField(queryset=Domain.objects.all(), source='domain')

    class Meta:
        model = Skill
        fields = ['id', 'skill', 'domain', 'domain_id']
