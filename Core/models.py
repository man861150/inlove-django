from django.db import models

# Create your models here.
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=255)
    birthday = models.DateField(null=True, blank=True)
    sex = models.CharField(max_length=10, choices=[('Chàng trai', 'Male'), ('Cô gái', 'Female'), ('Khác', 'Other')], null=True, blank=True)
    zodiac = models.CharField(max_length=20, null=True, blank=True)
    avatar_image = models.ImageField(upload_to='images/', null=True, blank=True)
    # tao = models.OneToOneField(Person)
    # ny = models.OneToOneField(Person)
    def __str__(self):
        return self.name
    