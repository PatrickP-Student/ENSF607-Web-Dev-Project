from django.db import models

# Create your models here.

class CourseOutline(models.Model):
    # Course Information Fields
    courseName = models.CharField(max_length=10)
    courseNumber = models.PositiveIntegerField()
    courseInformation = models.TextField()
    courseHours = models.CharField(max_length=25)
    academicCredit = models.DecimalField(max_digits=2, decimal_places=1)
    calendarReference = models.URLField()

    # Learning Outcome Fields
    # TODO: DYNAMIC LEARNING OUTCOME FIELDS
    outcomeField = models.TextField()

    # Final Grade Determination Fields
    # TODO: DYNAMIC GRADE DETERMINATION FIELDS
    gradeComponent = models.TextField()
    evaluatedOutcome = models.CharField(max_length=10)
    gradeWeight = models.PositiveIntegerField()
    gradeDeterminationNotes = models.TextField()

    # Letter grade conversions
    aPlusLower = models.DecimalField(max_digits=3, decimal_places=1)
    aLower = models.DecimalField(max_digits=3, decimal_places=1)
    aHigher = models.DecimalField(max_digits=3, decimal_places=1)
    aMinusLower = models.DecimalField(max_digits=3, decimal_places=1)
    aMinusHigher = models.DecimalField(max_digits=3, decimal_places=1)
    bPlusLower = models.DecimalField(max_digits=3, decimal_places=1)
    bPlusHigher = models.DecimalField(max_digits=3, decimal_places=1)
    bLower = models.DecimalField(max_digits=3, decimal_places=1)
    bHigher = models.DecimalField(max_digits=3, decimal_places=1)
    bMinusLower = models.DecimalField(max_digits=3, decimal_places=1)
    bMinusHigher = models.DecimalField(max_digits=3, decimal_places=1)
    cPlusLower = models.DecimalField(max_digits=3, decimal_places=1)
    cPlusHigher = models.DecimalField(max_digits=3, decimal_places=1)
    cLower = models.DecimalField(max_digits=3, decimal_places=1)
    cHigher = models.DecimalField(max_digits=3, decimal_places=1)
    cMinusLower = models.DecimalField(max_digits=3, decimal_places=1)
    cMinusHigher = models.DecimalField(max_digits=3, decimal_places=1)
    dPlusLower = models.DecimalField(max_digits=3, decimal_places=1)
    dPlusHigher = models.DecimalField(max_digits=3, decimal_places=1)
    dLower = models.DecimalField(max_digits=3, decimal_places=1)
    dHigher = models.DecimalField(max_digits=3, decimal_places=1)
    fHigher = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return "%s%s" % (self.courseName, self.courseNumber)