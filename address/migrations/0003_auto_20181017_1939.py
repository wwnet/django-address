# Generated by Django 2.1.2 on 2018-10-17 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('address', '0002_auto_20160213_1726'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='latitude',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='address',
            name='longitude',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
    ]