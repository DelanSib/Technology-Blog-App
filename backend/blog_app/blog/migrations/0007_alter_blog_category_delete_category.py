# Generated by Django 4.0.2 on 2022-02-22 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_alter_blog_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='category',
            field=models.CharField(choices=[('Artificial Intelligence', 'Artificial Intelligence'), ('Gadgets', 'Gadgets'), ('IoT', 'Iot')], max_length=255),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]