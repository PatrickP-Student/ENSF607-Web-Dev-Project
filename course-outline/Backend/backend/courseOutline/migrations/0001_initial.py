# Generated by Django 3.1.4 on 2020-12-21 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CourseOutline',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('courseName', models.CharField(max_length=10)),
                ('courseNumber', models.PositiveIntegerField()),
                ('courseInformation', models.TextField()),
                ('courseHours', models.CharField(max_length=25)),
                ('academicCredit', models.DecimalField(decimal_places=1, max_digits=2)),
                ('calendarReference', models.URLField()),
                ('outcomeField', models.TextField()),
                ('gradeComponent', models.TextField()),
                ('evaluatedOutcome', models.CharField(max_length=10)),
                ('gradeWeight', models.PositiveIntegerField()),
                ('gradeDeterminationNotes', models.TextField()),
                ('aPlusLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('aLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('aHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('aMinusLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('aMinusHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('bPlusLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('bPlusHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('bLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('bHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('bMinusLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('bMinusHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('cPlusLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('cPlusHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('cLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('cHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('cMinusLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('cMinusHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('dPlusLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('dPlusHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('dLower', models.DecimalField(decimal_places=1, max_digits=3)),
                ('dHigher', models.DecimalField(decimal_places=1, max_digits=3)),
                ('fHigher', models.DecimalField(decimal_places=1, max_digits=3)),
            ],
        ),
    ]
