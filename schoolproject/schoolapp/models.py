from django.db import models

class Student(models.Model):
     name = models.CharField(max_length=100)
     course = models.CharField(max_length=100)
     email = models.CharField(max_length=100)
     gender = models.CharField(max_length=100)

     def __str__(self):
          return self.name
